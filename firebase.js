import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import './FixTimerBug';
import from 'firebase';
import "firebase/firestore";

 const firebaseConfig={
  apiKey: "AIzaSyDVgNNCqorlA7b5Kwv4iIk74N_yhcxaBy8",
  authDomain: "fyp-practise.firebaseapp.com",
  databaseURL: "https://fyp-practise.firebaseio.com",
  projectId: "fyp-practise",
}

if(!firebase.apps.length) { 
  firebase.initializeApp(firebaseConfig) 
} else { 
 firebase.app() 
}

export default class App1 extends Component{
  constructor() {
    super();
    this.db = firebase.firestore().collection('Data');
    this.server=firebase.firestore().collection('Users').doc('Tokens');
    this.unsubscribe = null;
    this.state={
      cities:[],
      loading:true,
    }
}
registerForPushNotificationsAsync=async()=> {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }
  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log(token)
  // POST the token to your backend server from where you can retrieve it to send push notifications.
   this.server.update({ArrTokens : firebase.firestore.FieldValue.arrayUnion(token)})
}
sendPushNotification=async()=>{
  let responce= await fetch('https://exp.host/--/api/v2/push/send',{
    method:'POST',
    header:{
      Accept:'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      to:'ExponentPushToken[kParTjIsgY3ZEufWl9t_5J]',
      sound:'default',
      title:'Update',
      body:'Timetable is updated',
    })
  })
}
async componentDidMount() {
this.registerForPushNotificationsAsync()
this.unsubscribe=this.db.onSnapshot(snap=>{
  const cities=snap.docs[0].data().Names;
  console.log(cities)
  this.setState({cities,loading:false})
  let changes=snap.docChanges();
  changes.forEach(change=>{
    if(change.type == 'modified'){
    console.log('Modified')
    this.sendPushNotification()
  }
  })
})
}

componentWillUnMount(){
  this.unsubscribe();
}
 render(){
   if(!this.state.loading){
   return(
     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
       {this.state.cities.map(city=>(<Text>{city}</Text>))}
     </View>
   )}
   else return null
 }
} 
