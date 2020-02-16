import React,{Component} from 'react';
import {ScrollView,View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import NewT from './newT';
import FirstPage from './FirstPage';
const sections=[{text:'Section A',press:'Smester1A'},{text:'Section B',press:'Smester1B'}]
export class Smes1Screen extends Component{
    static navigationOptions=({navigation})=>({
        headerTitle:'1st Smester',
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
        tableData:[['Probability and Staticitics','Sir Azeem'],
                   ['Programming Fundamentals','Sir Zain Murtaza'],
                   ['Machine Learning','Sir Akram'],
                   ['Linear Algebra','Sir Abdulrehman'],
                   ['Digital Logic and Design','Sir kamran'],
                  ]
    }
    render(){
        return(
          <FirstPage sections={sections} func={this.props.navigation.navigate}
          tabelHead={this.state.tabelHead} tableData={this.state.tableData}/>
        )
    }
}
export class Smes1A extends Component {
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
            tableHead:['','Mon','Tue','Wed','Thu','Fri'],
            tableTime:['08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM'],
            tableData:[['','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies']
    
    ],
    }
render() {
          const state = this.state;
          return (
             <NewT headerData={state.tableHead} tableData={state.tableData} sideData={state.tableTime}></NewT>
          )
      }
  }

export class Smes1B extends Component {
      static navigationOptions=({navigation})=>({
          headerTitle:'1st Smester (Section B)',
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
              tableData:[['','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
  ['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
  ['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
  ['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
  ['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
  ['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
  ['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies'],
  ['Differential Equations','Electrical Workshop G2','Programming Fundamentrals','Electric Circuits','Islamic Studies']
          ],
          }
         
  render() {
            const state = this.state;
            return (
               <NewT headerData={state.tableHead} tableData={state.tableData} sideData={state.tableTime}></NewT>
            )
        }
      }