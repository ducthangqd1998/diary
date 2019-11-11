import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default class Login extends Component {
  login = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.diaryLayout}>
          <Image
            style={styles.diaryIcon}
            source={require('../img/notebook.png')}
          />
        </View>
        <TouchableOpacity style={styles.boxborder} onPress={this.login}>
          <View style={styles.border}>
            <Image
              style={styles.iconGoogle}
              source={require('../img/search.png')}
            />
            <View style={styles.center}>
              <Text style={styles.text}>SIGN IN/UP WITH GOOGLE</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  diaryLayout: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '50%',
  },
  diaryIcon: {
    width: 200,
    height: 200,
  },
  boxborder: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 20,
  },
  border: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 2,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 0.2,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    height: 50,
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  text: {
    fontWeight: 'bold',
    color: '#996633',
    fontSize: 18,
  },
  iconGoogle: {
    width: 25,
    height: 25,
  },
});
