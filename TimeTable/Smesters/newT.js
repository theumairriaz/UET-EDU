import React,{Component} from 'react';
import {ScrollView,View,StyleSheet} from 'react-native';
import {Table,TableWrapper,Col,Row,Rows} from 'react-native-table-component';
export default class NewT extends Component{
    state={
        widthArr: [70,120,120,120,120,120],
        tablewidth:[120,120,120,120,120],
        colheight:[60,60,60,60,60,60,60,60]
    }
    render() {
        const state = this.state;
        return (
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View>
                <Table borderStyle={{borderColor: '#BC8F8F',borderWidth:2}}>
                  <Row data={this.props.headerData} widthArr={state.widthArr} style={styles.header} textStyle={styles.headertext}/>
                </Table>
                <ScrollView>
                  <TableWrapper style={styles.wrapper} borderStyle={{borderColor: '#BC8F8F',borderWidth:2}}>
                      <Col data={this.props.sideData} textStyle={{fontWeight:'bold',color:'#BC8F8F'}} style={styles.title} heightArr={state.colheight}></Col>
                        <Rows
                          data={this.props.tableData}
                          widthArr={state.tablewidth}
                          style={styles.row}
                          textStyle={styles.text}
                        />
                  </TableWrapper>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        )
      }
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 20, backgroundColor: '#fff' },
    header: {height:40,backgroundColor: '#BC8F8F'},
    headertext: { textAlign: 'center',color:'white',fontSize:20,fontWeight: 'bold' },
    text: { textAlign: 'center',color:'black' },
    dataWrapper: { marginTop: -1 },
    row: { height: 60, backgroundColor: 'white' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#FAEBD7',},
  });
