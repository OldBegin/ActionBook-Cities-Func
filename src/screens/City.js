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
import uuidV4 from 'uuid/v4';

const {width} = Dimensions.get('window');

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locName: '',
      description: '',
    };
  }

  static navigationOptions = props => {
    const {city} = props.navigation.state.params;
    return {
      title: city.city,
      headerTitleStyle: {
        fontSize: 18,
        color: 'black',
        fontWeight: '400',
        textAlign: 'center',
      },
    };
  };

  _onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  _onSubmitt = () => {
    console.log('state in onSubmit of city: ');
    const {city} = this.props.navigation.state.params;
    const location = {
      uuid: uuidV4(),
      locName: this.state.locName,
      description: this.state.description,
    };

    this.props.screenProps.addLocation(location, city);

    this.setState({
      locName: '',
      description: '',
    });
  };

  render() {
    const {city} = this.props.navigation.state.params;
    console.log('props in city: ', this.props);
    console.log('state in city: ', this.state);
    //console.log('cityInfo in city: ', cityInfo);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          {city.locations.map((location, index) => (
            <View key={index} style={styles.listContainer}>
              <Text style={styles.locationText}>{location.locName}</Text>
              <Text style={styles.subText}>{location.description}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={val => {
              this._onChangeText('locName', val);
            }}
            value={this.state.locName}
            style={styles.textInput}
            placeholder="관광지를 입력하세요"
          />
          <TextInput
            onChangeText={val => {
              this._onChangeText('description', val);
            }}
            value={this.state.description}
            style={styles.textInput}
            placeholder="상세정보를 입력하세요"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._onSubmitt()}>
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
  locationText: {
    padding: 5,
    paddingLeft: 10,
    fontWeight: '400',
    fontSize: 18,
    color: '#5a5b5b',
    textAlign: 'left',
  },
  subText: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 14,
    color: '#5a5b5b',
    textAlign: 'left',
    fontWeight: '200',
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
