import React, {Component} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({
  name: 'diary1.db',
});
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      id: null,
      title: '',
      content: '',
      dateCreate: '',
      timeCreate: '',
    };
    const self = this;
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT * FROM sqlite_master WHERE type='table' AND name='diaryGroup'",
        [],
        function(tx, res) {
          if (res.rows.length === 0) {
            txn.executeSql(
              'DROP TABLE IF EXISTS diaryGroup',
              [],
              (tes, res) => {
                console.log('drop sucess', res);
              },
            );
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS diaryGroup(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(100), content VARCHAR(1000), timeCreate DATETIME, color VARCHAR(1000))',
              [],
              (tss, results) => {
                console.log('create success', results);
              },
            );
          }
        },
      );
    });
    db.transaction(function(tx) {
      tx.executeSql('SELECT * FROM diaryGroup', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; i++) {
          temp.push(results.rows.item(i));
        }
        try {
          self.setState({
            records: temp,
          });
        } catch (e) {
          console.log(e);
        }
      });
    });

    // db.transaction(function(tx) {
    //   tx.executeSql(
    //     'INSERT INTO diaryGroup (title, content, timeCreate, color) VALUES (?,?,?,?)',
    //     ['The first day', 'Sleep 12 hours', '1998-11-20', '#ABC'],
    //     (tx, results) => {
    //       console.log('add success');
    //     },
    //   );
    // });
  }

  onDelete(id) {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  diaryGroup where id=?',
        [id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Note deleted successfully!',
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    return db.transaction(tx => {
                      tx.executeSql(
                        'SELECT * FROM diaryGroup',
                        [],
                        (tx, results) => {
                          var temp = [];
                          for (let i = 0; i < results.rows.length; ++i) {
                            temp.push(results.rows.item(i));
                          }
                          this.setState({
                            records: temp,
                          });
                        },
                      );
                    });
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            Alert.alert('Failed', 'Failed to delete note!');
          }
        },
      );
    });
  }

  addNewNote = () => {
    this.props.navigation.navigate('NewNote');
  };

  nodeDetail = note => {
    this.props.navigation.navigate('NoteDetail', {note});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.records}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.boxborder}
                onPress={() => {
                  this.nodeDetail(item);
                }}
                onLongPress={() => {
                  this.onDelete(item.id);
                }}>
                <View style={[styles.border, {backgroundColor: item.color}]}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.contentText}>{item.content}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
        <View style={styles.newNote}>
          <TouchableOpacity onPress={() => this.addNewNote()}>
            <Image
              style={styles.plusButton}
              source={require('../img/pencil.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  listNote: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  plusButton: {
    width: 55,
    height: 55,
  },
  newNote: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  boxborder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  border: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 2,
    borderWidth: 0.2,
    shadowRadius: 6,
    elevation: 3,
    borderRadius: 10,
    paddingLeft: 20,
    height: 90,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#AFA',
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
});
