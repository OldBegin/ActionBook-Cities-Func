import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class City extends Component {
  static navigationOptions = props => {
    const {cityInfo} = props.navigation.state.params;
    return {
      title: cityInfo.city,
      headerTitleStyle: {
        fontSize: 18,
        color: 'black',
        fontWeight: '400',
        textAlign: 'center',
      },
    };
  };

  render() {
    //console.log('in City: ', this.props.navigation.state.params.cityInfo.city);
    const {cityInfo} = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.listContainer}>
            <Text style={styles.text}>location 1</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.text}>location 1</Text>
          </View>
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={this.onChangeText}
            style={styles.textInput}
            placeholder="관광지를 입력하세요"
          />
          <TextInput
            onChangeText={this.onChangeText}
            style={styles.textInput}
            placeholder="관광지를 입력하세요"
          />
          <TouchableOpacity style={styles.button}>
            <Text>Add Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5a5b5b',
  },
  scrollContainer: {
    flex: 3,
    paddingVertical: 5,
    backgroundColor: '#d8d8d8',
    width: width - 1,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 5,
    marginVertical: 2,
  },
  inputContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5a5b5b',
    width: width - 1,
    marginVertical: 5,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 5,
    marginHorizontal: 5,
    width: width - 10,
    backgroundColor: '#d8d8d8',
  },
  textInput: {
    marginTop: 5,
    width: 350,
    height: 40,
    padding: 5,

    backgroundColor: 'white',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#d8d8d8',
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
  },
});
