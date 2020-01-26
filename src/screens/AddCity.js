import React, {useState, Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import uuidV4 from 'uuid/v4';

const AddCity = ({navigation, screenProps}) => {
  //const [city, setCity] = useState();
  const [cityNameInput, setCityNameInput] = useState();
  const [countryNameInput, setCountryNameInput] = useState();

  const _onChangeCityText = value => {
    setCityNameInput(value);
  };

  const _onChangeCountryText = value => {
    setCountryNameInput(value);
  };

  const _onSubmit = () => {
    if (!cityNameInput || !countryNameInput) {
      Alert.alert('도시와 국가를 입력해주세요.');
    } else {
      const _city = {
        uuid: uuidV4(),
        cityName: cityNameInput,
        countryName: countryNameInput,
        locations: [],
      };
      console.log('_city::: ', _city);
      screenProps.addCity(_city);
    }
    setCityNameInput('');
    setCountryNameInput('');
    navigation.navigate('Cities');
    console.log('navigation::: ', navigation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Cities</Text>
      <TextInput
        style={styles.textInput}
        value={cityNameInput}
        onChangeText={value => {
          _onChangeCityText(value);
        }}
        placeholder="Input City"
      />
      <TextInput
        style={styles.textInput}
        value={countryNameInput}
        onChangeText={value => {
          _onChangeCountryText(value);
        }}
        placeholder="Input country"
      />
      <TouchableOpacity
        onPress={() => {
          _onSubmit();
        }}>
        <View style={styles.submit}>
          <Text>도시추가</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// export default class AddCity extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       city: '',
//       country: '',
//     };
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     const isChangedState = this.state !== nextState; //state 가 변경된 경우
//     const isChangedProps = this.props.navigation !== nextProps.navigation; //props.navigation 이 변경된경우
//     return isChangedState || isChangedProps;
//   }
//   _onChangeText = (key, value) => {
//     this.setState({[key]: value});
//   };
//   _onSubmit = () => {
//     //console.log('in _onSubmit', this.props);
//     if (!this.state.city || !this.state.country) {
//       Alert.alert('도시와 국가를 입력해주세요');
//     } else {
//       const city = {
//         city: this.state.city,
//         country: this.state.country,
//         uuid: uuidV4(),
//         locations: [],
//       };
//       this.props.screenProps.addCity(city);
//       this.setState(
//         {
//           city: '',
//           country: '',
//         },
//         () => this.props.navigation.navigate('Cities'),
//       );
//     }
//   };

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
  textInput: {
    marginTop: 20,
    width: 350,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#d8d8d8',
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 20,
    width: 250,
    height: 50,
    backgroundColor: '#d8d8d8',
  },
});

export default AddCity;
