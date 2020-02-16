import React,{Component} from 'react';
import {FlatList,StyleSheet,Text,View,Image,Button,TouchableOpacity} from 'react-native';
export default class HomeScreen extends Component{
  static navigationOptions=({navigation})=>({
    headerTitle:'Home',
    headerTintColor:'teal',
    headerTitleStyle:{
        fontSize:20,
        fontWeight:'bold',
    },
})
render(){
        return(
        <View style={styles.container}>
        <Text>Welcome</Text>
        </View>
        )
    }
}
const styles=StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6,fontSize:20 },
})
