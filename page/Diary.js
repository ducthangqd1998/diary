import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import DateTimePicker from '@react-native-community/datetimepicker';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  componentDidMount() {
    console.log('dismount');
    GoogleSignin.configure({
      webClientId:
        '112211642588-rgqd26j70ug1ao63dsv5dmgkrqk8vt2g.apps.googleusercontent.com',
      androidClientId:
        '112211642588-pn12lfs0ufmb3ko04qta65br61bqco0g.apps.googleusercontent.com',
      // iosClientId: Config.IOS_CLIENT_ID,
      offlineAccess: true,
    });
  }

  signIn = async () => {
    console.log('okokdfdfdokokokosdsdsds');
    try {
      await GoogleSignin.hasPlayServices();
      console.log('okokdfdffssddsdokokoko');
      const userInfo = await GoogleSignin.signIn();
      console.log('okokdfdfdokokoko');
      this.setState({userInfo});
      console.log('okokokokoko', this.userInfo);
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('1');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('2');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('3');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

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
        {/* <TouchableOpacity style={styles.boxborder} onPress={this.login}>
          <View style={styles.border}>
            <Image
              style={styles.iconGoogle}
              source={require('../img/search.png')}
            />
            <View style={styles.center}>
              <Text style={styles.text}>SIGN IN/UP WITH GOOGLE</Text>
            </View>
          </View>
        </TouchableOpacity> */}
        <View style={styles.boxborder}>
          <GoogleSigninButton
            style={{width: '80%', height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
          />
        </View>
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
