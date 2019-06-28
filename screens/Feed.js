import React, { Component } from 'react';
import { View } from 'react-native';
import SpotList from '../components/SpotList';

class FeedScreen extends Component {
  static navigationOptions = {
    title: 'Feed',
    headerStyle: {
      backgroundColor: '#f1f1f1',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  };

  render() {
    return (
      <View>
        <SpotList />
      </View>
    );
  }
}

export default FeedScreen;
