import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.diaryLayout}>
          <Image
            style={styles.diaryIcon}
            source={require('../img/notebook.png')}
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
    width: 150,
    height: 150,
  },
});
