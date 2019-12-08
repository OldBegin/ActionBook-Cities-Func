import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

export default class Cities extends Component {
  render() {
    const {cities} = this.props.screenProps;
    console.log('cities.props', cities);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{cities[0].city}</Text>
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
