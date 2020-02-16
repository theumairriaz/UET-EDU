import React,{Component} from 'react';
import {ScrollView,View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import NewT from './newT';
import FirstPage from './FirstPage';
const sections=[{text:'Section A',press:'Smester3A'},{text:'Section B',press:'Smester3B'}]
const tableHead=['Subject','Teacher']
const tableData=[['SemiConductor Devices (3+1)','Mr.H.E.Gillani / Mr.Habib Ullah'],
        ['Circuit Analysis and Design (3+1)','Mr.Kamran / Mr.Ibrahim'],
        ['Digital Systems (3+1)','Dr.Ashir Waleed / Mr.Ali Raza'],
        ['Technical Writing and Presentation (3+0)','Mrs.Saira Zahid'],
        ['Linear Algebra (3+0)','Mrs.Shazia Kareem / Dr.Abdul Rehman'],
       ]
export class Smes3Screen extends Component{
    static navigationOptions=({navigation})=>({
        headerTitle:'3rd Smester',
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
        tableHead:[],
        tableData:[],
    }
    componentDidMount(){
        this.setState({tableHead,tableData})
    }
    render(){
        return(
          <FirstPage sections={sections} func={this.props.navigation.navigate}
          tabelHead={this.state.tableHead} tableData={this.state.tableData}/>
        )
    }
}
export class Smes3A extends Component {
    static navigationOptions=({navigation})=>({
        headerTitle:'3rd Smester (Section A)',
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
            tableHead:['','Mon','Tue','Wed','Thu','Fri'],
            tableTime:['08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM'],
            tableData:[
            ['Semiconductor Devices','Technical Writing','DS lab G1','Digital Systems','DS lab G2'],
            ['Semiconductor Devices','Semiconductor Devices','DS lab G1','','DS lab G2'],
            ['Digital Systems','Linear Algebra','DS lab G1','Technical Writing','DS lab G2'],
            ['Circuit Analysis and Design','Circuit Analysis and Design','Digital System','Linear Algebra','Linear Algebra'],
            ['Break','Break','Break','Break','Break'],
            ['SD lab G1 / CAD lab G1','SD lab G2','','CAD lab G2','',],
            ['SD lab G1 / CAD lab G1','SD lab G2','Technical Writing','CAD lab G2',''],
            ['SD lab G1 / CAD lab G1','SD lab G2','','CAD lab G2','Circuit Analysis and Design']
        ]
    }
render() {
          const state = this.state;
          return (
             <NewT headerData={state.tableHead} tableData={state.tableData} sideData={state.tableTime}></NewT>
          )
      }
  }

export class Smes3B extends Component {
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