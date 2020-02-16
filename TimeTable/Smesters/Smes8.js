import React,{Component} from 'react';
import {ScrollView,View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import NewT from './newT';
import FirstPage from './FirstPage';
const sections=[{text:'Section A',press:'Smester8A'},{text:'Section B',press:'Smester8B'}]
export class Smes8Screen extends Component{
    static navigationOptions=({navigation})=>({
        headerTitle:'8th Smester',
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'#5F9EA0',
        },
        headerTitleStyle:{
            fontSize:20,
            fontWeight:'bold',
        },
    })
    state={
        tabelHead:['Subject','Teacher'],
        tableData:[[],
        [],
        [],
        [],
        [],
       ]
    }
    render(){
        return(
          <FirstPage sections={sections} func={this.props.navigation.navigate}
          tabelHead={this.state.tabelHead} tableData={this.state.tableData}/>
        )
    }
}
export class Smes8A extends Component {
    static navigationOptions=({navigation})=>({
        headerTitle:'1st Smester (Section A)',
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'#5F9EA0',
        },
        headerTitleStyle:{
            fontSize:20,
            fontWeight:'bold',
        },
    })
        state = {
            tableHead:[],
            tableTime:[],
            tableData:[[],[],[],[],[],[],[],[]]
    }
render() {
          const state = this.state;
          return (
             <NewT headerData={state.tableHead} tableData={state.tableData} sideData={state.tableTime}></NewT>
          )
      }
  }

export class Smes8B extends Component {
      static navigationOptions=({navigation})=>({
          headerTitle:'1st Smester (Section A)',
          headerTintColor:'white',
          headerStyle:{
              backgroundColor:'#5F9EA0',
          },
          headerTitleStyle:{
              fontSize:20,
              fontWeight:'bold',
          },
      })
      state = {
        tableHead:[],
        tableTime:[],
        tableData:[[],[],[],[],[],[],[],[]]
}
     
  render() {
            const state = this.state;
            return (
               <NewT headerData={state.tableHead} tableData={state.tableData} sideData={state.tableTime}></NewT>
            )
        }
      }