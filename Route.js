import React from 'react';
import {ScrollView,StyleSheet,Text,Button,View,Image} from 'react-native';
import { Ionicons,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import {createAppContainer,createDrawerNavigator,SafeAreaView,DrawerItems, createStackNavigator} from 'react-navigation';

import HomeScreen from './Home/HomeScreen';
import TimeTableScreen from './TimeTable/TimeTableScreen';
import ExamsScreen from './Exams/ExamsScreen';
import NewsScreen from './News/NewsScreen';
import {Smes1Screen,Smes1A,Smes1B} from './TimeTable/Smesters/Smes1';
import {Smes2Screen,Smes2A,Smes2B} from './TimeTable/Smesters/Smes2';
import {Smes3Screen,Smes3A,Smes3B} from './TimeTable/Smesters/Smes3';
import {Smes4Screen,Smes4A,Smes4B} from './TimeTable/Smesters/Smes4';
import {Smes5Screen,Smes5A,Smes5B} from './TimeTable/Smesters/Smes5';
import {Smes6Screen,Smes6A,Smes6B} from './TimeTable/Smesters/Smes6';
import {Smes7Screen,Smes7A,Smes7B} from './TimeTable/Smesters/Smes7';
import {Smes8Screen,Smes8A,Smes8B} from './TimeTable/Smesters/Smes8';
import Menu from "./Menu.js";

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView styles={styles.container}>
            <Image style={styles.DrawerImage} source={require('./IMG-20171001-WA0003.jpg')}></Image>
        </SafeAreaView>
        <DrawerItems {...props}/>
    </ScrollView>
  );
const styles=StyleSheet.create({
    container:{
     flex:1,
    },
    DrawerImage:{
        height:175,
        width:175,
        borderRadius:70,
        marginLeft:25,
        marginRight:25,
        marginTop:40,
        marginBottom:25,
    },
})

// App Navigation
const HomeStack=createStackNavigator({
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:({navigation})=>({
        headerLeft:(<Menu pass={navigation}></Menu>),
        headerTitle:'Home',
        })
    },
})
const ExamsStack=createStackNavigator({
    ExamsHome:{
     screen:ExamsScreen,
     navigationOptions:({navigation})=>({
     headerLeft:(<Menu pass={navigation}></Menu>),
     headerTitle:'Exams',
    })
},
})
const TimeTableStack=createStackNavigator({
    TimetableHome:{
    screen:TimeTableScreen,
    navigationOptions:({navigation})=>({
    headerLeft:(<Menu pass={navigation}></Menu>),
    headerTitle:'TimeTable',
    })
},
  'Smester1':Smes1Screen,
  'Smester2':Smes2Screen,
  'Smester3':Smes3Screen,
  'Smester4':Smes4Screen,
  'Smester5':Smes5Screen,
  'Smester6':Smes6Screen,
  'Smester7':Smes7Screen,
  'Smester8':Smes8Screen,
  'Smester1A':Smes1A,
  'Smester1B':Smes1B,
  'Smester2A':Smes2A,
  'Smester2B':Smes2B,
  'Smester3A':Smes3A,
  'Smester3B':Smes3B,
  'Smester4A':Smes4A,
  'Smester4B':Smes4B,
  'Smester5A':Smes5A,
  'Smester5B':Smes5B,
  'Smester6A':Smes6A,
  'Smester6B':Smes6B,
  'Smester7A':Smes7A,
  'Smester7B':Smes7B,
  'Smester8A':Smes8A,
  'Smester8B':Smes8B,
},
{
   initialRouteName:'TimetableHome'
}
)
const NewsStack=createStackNavigator({
    NewsHome:{
     screen:NewsScreen,
     navigationOptions:({navigation})=>({
     headerLeft:(<Menu pass={navigation}></Menu>),
     headerTitle:'Campus News',
    })
},
})
const AppNavigator=createDrawerNavigator({
     Home:{
        screen:HomeStack,
        navigationOptions:{
        drawerIcon:(<Ionicons name='ios-home' size={27}></Ionicons>)
        }
    },
    TimeTable:{
        screen:TimeTableStack,
        navigationOptions:{
        drawerIcon:(<MaterialCommunityIcons name='timetable' size={27}></MaterialCommunityIcons>)
        }
    },
    Exams:{
        screen:ExamsStack,
        navigationOptions:{
        drawerIcon:(<Ionicons name='ios-school' size={27}></Ionicons>)
        }
    },
    News:{
        screen:NewsStack,
        navigationOptions:{
        drawerIcon:(<FontAwesome name='newspaper-o' size={27}></FontAwesome>)
    }
    },
},
    {
      initialRouteName:'Home',
      contentComponent:CustomDrawerContentComponent,
      drawerWidth:230,
      contentOptions:{
          activeTintColor:'#483D8B'
      }
    },
)
export default createAppContainer(AppNavigator)