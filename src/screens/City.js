import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class City extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Here is City Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    color: '#5a5b5b',
    textAlign: 'center',
  },
});
