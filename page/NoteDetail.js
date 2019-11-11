import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {openDatabase} from 'react-native-sqlite-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import ColorPalette from 'react-native-color-palette';

var db = openDatabase({
  name: 'diary.db',
});
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {bold} from 'ansi-colors';

export default class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      date: new Date('2020-06-12T14:42:42'),
      color: '',
      mode: 'date',
      show: false,
      showColorPicker: false,
    };
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = mode => {
    this.setState({
      show: true,
      mode,
    });

    console.log(this.state.date);
  };

  showColorPicker = () => {
    const bool = !this.state.showColorPicker;
    this.setState({
      showColorPicker: bool,
    });
  };

  datepicker = () => {
    this.show('date');
    console.log(this.state.Date);
  };

  timepicker = () => {
    this.show('time');
  };

  colorpicker = () => {
    this.showColorPicker();
  };

  render() {
    const {show, date, mode, showColorPicker} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.boxborder}>
          <View style={styles.border}>
            <TextInput
              style={styles.titleText}
              underlineColorAndroid="transparent"
              placeholder="Title "
              placeholderTextColor="black"
              autoCaptalize="none"
              onChangeText={age => this.setState({age})}
            />

            <TextInput
              style={styles.contentText}
              underlineColorAndroid="transparent"
              placeholder="Content"
              placeholderTextColor="black"
              autoCaptalize="none"
              onChangeText={address => this.setState({address})}
            />
          </View>
        </View>

        <View style={styles.tabNavigator}>
          <TouchableOpacity
            style={styles.tab}
            onPress={this.datepicker}
            title="Show date picker!">
            <Icon name="calendar" size={20} color="#CDCCCE" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={this.timepicker}
            title="Show date picker!">
            <Icon name="clock" size={20} color="#CDCCCE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} onPress={this.colorpicker}>
            <Icon name="palette" size={20} color="#CDCCCE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Icon name="trash" size={20} color="#CDCCCE" />
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
        )}
        {showColorPicker && <ColorPalette />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    height: '40%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentText: {
    height: '40%',
    fontSize: 18,
  },
  boxborder: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    margin: 20,
  },
  border: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 2,
    shadowRadius: 6,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    height: 130,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  tabNavigator: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 50,
  },
});
