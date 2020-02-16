import React,{Component} from 'react';
import {TouchableOpacity,Text,View,ScrollView,StyleSheet} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
export default class FirstPage extends Component{
sec=(obj)=>(
        <TouchableOpacity onPress={()=>this.props.func(obj.press)}>
        <Text style={styles.touchstyle}>{obj.text}</Text>
        </TouchableOpacity>
        )
        render(){
            return(
        <ScrollView style={styles.container}>
                <Table style={{justifyContent:'center',}} borderStyle={{borderWidth: 2,borderColor: '#DCDCDC'}}>
                    <Row data={this.props.tabelHead} style={styles.head} textStyle={[styles.text,styles.headbold]}></Row>
                    <Rows data={this.props.tableData} textStyle={styles.text}></Rows>
                </Table>
           <View style={{alignItems:'center',padding:40}}>
           {this.props.sections.map(this.sec)}
           </View>
        </ScrollView>
            )
        }
}
const styles=StyleSheet.create({
    touchstyle:{
      fontSize:28,
      color:'#800000',
      paddingBottom:10,
      backgroundColor:'white',
    },
    container:{
        flex:1,
        padding:16,
        paddingTop:30,
    },
    head:{
        height: 40,
        backgroundColor:'#DCDCDC',
    },
    text:{
        margin:6,
        fontSize:20,
        color:'#800000',
        textAlign:'center',
    },
    headbold:{
        fontWeight:'bold'
    }
  })