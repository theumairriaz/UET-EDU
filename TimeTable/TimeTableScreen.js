import React,{Component} from 'react';
import {StyleSheet,Text,Button,View,Image,TouchableOpacity} from 'react-native';

const details=[{id:1,text:'1st Smester',press:'Smester1'},{id:2,text:'2nd Smester',press:'Smester2'},            
{id:3,text:'3rd Smester',press:'Smester3'},{id:4,text:'4th Smester',press:'Smester4'},
{id:5,text:'5th Smester',press:'Smester5'},{id:6,text:'6th Smester',press:'Smester6'},
{id:7,text:'7th Smester',press:'Smester7'},{id:8,text:'8th Smester',press:'Smester8'},]

export default class TimeTableScreen extends Component{
  static navigationOptions=({navigation})=>({
    headerTintColor:'teal',
    headerTitleStyle:{
        fontSize:20,
        fontWeight:'bold',
    },
})
smes=(obj)=>(
   <TouchableOpacity onPress={()=>this.props.navigation.navigate(obj.press)} 
    disabled={!(obj.id==3||obj.id==5||obj.id==7)}>
   <Text style={styles.touchstyle}>{obj.text}</Text>
   </TouchableOpacity>
   )
render(){
        return(
            <View style={styles.main}>
                <Text style={{fontSize:48,fontWeight:'bold'}}> TimeTable </Text>
                 {details.map(this.smes)}
            </View>
        )
    }
}
const styles=StyleSheet.create({
    main:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    touchstyle:{
      fontSize:20,
      color:'#191970',
      padding:10,
      backgroundColor:'white',
      textAlign:'center',
    },
})
