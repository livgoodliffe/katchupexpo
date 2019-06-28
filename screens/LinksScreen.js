import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import * as Contacts from 'expo-contacts';
import { Gyroscope } from 'expo-sensors';
import * as Expo from 'expo';

export default function LinksScreen() {
  return (
    <View>
      <Text>Links screen</Text>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'All Reviews',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
