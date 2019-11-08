import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {Icon, SearchBar, TabBar} from '@ant-design/react-native';
const renderContent = (tab, index) => {
  const style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
  };
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
    return (
      <View key={`${index}_${i}`} style={style}>
        <Text>
          {tab.title} - {i}
        </Text>
      </View>
    );
  });
  return <ScrollView style={{backgroundColor: '#fff'}}>{content}</ScrollView>;
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }
  renderContent(pageText) {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{margin: 50}}>{pageText}</Text>
      </View>
    );
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="#f5f5f5">
          <TabBar.Item
            title="Life"
            icon={<Icon name="home" />}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => this.onChangeTab('blueTab')}>
            {this.renderContent('Life Tab')}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="ordered-list" />}
            title="Koubei"
            badge={2}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => this.onChangeTab('redTab')}>
            {this.renderContent('Koubei Tab')}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="like" />}
            title="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => this.onChangeTab('greenTab')}>
            {this.renderContent('Friend Tab')}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="user" />}
            title="My"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => this.onChangeTab('yellowTab')}>
            {this.renderContent('My Tab')}
          </TabBar.Item>
        </TabBar>
      </View>
    );
  }
}
export const title = 'Tabs';
export const description = 'Tabs example';
