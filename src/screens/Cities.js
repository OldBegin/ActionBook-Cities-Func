import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class Cities extends Component {
  static navigationOptions = {
    title: 'CITY LIST',
    headerTitleStyle: {
      fontSize: 18,
      color: 'black',
      fontWeight: '400',
      textAlign: 'center',
    },
  };

  _onMoveToCity = item => {
    console.log('onMoveToCity: ', this.props.navigation);
    this.props.navigation.navigate('City', {city: item});
  };

  render() {
    const {cities} = this.props.screenProps;
    console.log('Cities rendering', cities);
    console.log('screenProps in Cities', this.props.screenProps.cities);
    return (
      <ScrollView>
        <View style={styles.container}>
          {cities.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this._onMoveToCity(item);
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
  }
}

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
