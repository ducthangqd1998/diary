import React from 'react';
import {View} from 'react-native';
import NoteDetail from './page/NoteDetail';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './page/Home';
import Login from './page/Login';
import Loading from './page/Loading';
import NewNote from './page/NewNote';
import Diary from './page/Diary';

const StackNavigator = createStackNavigator(
  {
    Loading: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Diary: {
      screen: Diary,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    NoteDetail: {
      screen: NoteDetail,
      navigationOptions: {},
    },
    NewNote: {
      screen: NewNote,
      navigationOptions: {},
    },
  },
  {headerLayoutPreset: 'center'},
);
export default createAppContainer(StackNavigator);

// import React from 'react';
// import {StyleSheet, Platform, Image, Text, View} from 'react-native';
// import {createSwitchNavigator, createAppContainer} from 'react-navigation';
// import the different screens
// import Loading from './page/firebase/loading';
// import SignUp from './page/firebase/signup';
// import Login from './page/firebase/login';
// import Main from './page/firebase/main';
// // create our app's navigation stack
// const App = createSwitchNavigator(
//   {
//     Loading,
//     SignUp,
//     Login,
//     Main,
//   },
//   {
//     initialRouteName: 'Loading',
//   },
// );
// export default createAppContainer(App);
