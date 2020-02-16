import React,{Component} from 'react';
import {StyleSheet,Text,Button,View,Image} from 'react-native';
export default class ExamsScreen extends Component{
  static navigationOptions=({navigation})=>({
    headerTintColor:'teal',
    headerTitleStyle:{
        fontSize:20,
        fontWeight:'bold',
    },
})
    render(){
        return(
          <View>
            <Text>Exams Screen</Text>
          </View>
        )
    }
}
const styles=StyleSheet.create({
    main:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
  })