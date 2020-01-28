//import React, { Component } from 'react';
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');

const Cities = ({screenProps, navigation}) => {
  console.log('Cities Screen!!!');
  useEffect(() => {
    console.log('Cities의 랜더링이 완료됨');
    console.log('screenProps: ', screenProps);
    console.log('navigation: ', navigation);
  });

  Cities.navigationOptions = {
    title: 'CITY LIST',
    headerTitleStyle: {
      fontSize: 18,
      color: 'black',
      fontWeight: '400',
      textAlign: 'center',
    },
  };

  const _onMoveToCity = item => {
    navigation.navigate('City', {city: item});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {screenProps.cities.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              _onMoveToCity(item);
            }}>
            <View style={styles.list}>
              <Text style={styles.cityText}>{item.cityName}</Text>
              <Text style={styles.countryText}>{item.countryName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 3,
    marginTop: 5,
    marginHorizontal: 5,
    width: width - 10,
    backgroundColor: '#d8d8d8',
  },
  cityText: {
    padding: 5,
    paddingLeft: 10,
    fontWeight: '400',
    fontSize: 18,
    color: '#5a5b5b',
    textAlign: 'left',
  },
  countryText: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 14,
    color: '#5a5b5b',
    textAlign: 'left',
    fontWeight: '200',
  },
});

export default Cities;
