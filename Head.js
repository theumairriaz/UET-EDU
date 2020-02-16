import React,{component} from 'react';
export default Head=(props)=>({
    headerTitle:props.title,
    headerTintColor:props.color,
    headerStyle:{
        backgroundColor:props.bgcolor,
    },
    headerTitleStyle:{
        fontSize:20,
        fontWeight:'bold',
    },
  })