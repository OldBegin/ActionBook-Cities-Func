import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme';

const CenterMessage = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default CenterMessage;
