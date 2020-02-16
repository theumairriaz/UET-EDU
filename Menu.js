import React,{Component} from 'react';
import {} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default Menu=(prop)=>(<Icon.Button 
    style={{backgroundColor:'white'}} 
    name='ios-menu' size={35}
    color='teal' 
    onPress={prop.pass.openDrawer}></Icon.Button>
  )
  