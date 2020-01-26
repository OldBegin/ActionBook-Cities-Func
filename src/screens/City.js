//import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
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

const City = ({screenProps, navigation}) => {
  console.log('City Screen!!!');
  useEffect(() => {
    console.log('City의 랜더링이 완료됨');
    console.log('screenProps: ', screenProps);
    console.log('navigation: ', navigation);
  });

  const [locName, setLocName] = useState('');
  const [description, setDescription] = useState('');

  City.navigationOptions = props => {
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

  const _onChangeLocName = val => {
    setLocName(val);
  };
  const _onChangeDesciption = val => {
    setDescription(val);
  };

  const _onSubmit = () => {
    console.log('City - params.city', navigation.state.params.city);
    const {city} = navigation.state.params;
    const location = {
      uuid: uuidV4(),
      locName: locName,
      description: description,
    };

    screenProps.addLocation(location, city);

    setLocName('');
    setDescription('');
  };

  const {city} = navigation.state.params;

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
            _onChangeLocName(val);
          }}
          value={locName}
          style={styles.textInput}
          placeholder="관광지를 입력하세요"
        />
        <TextInput
          onChangeText={val => {
            _onChangeDesciption(val);
          }}
          value={description}
          style={styles.textInput}
          placeholder="상세정보를 입력하세요"
        />
        <TouchableOpacity style={styles.button} onPress={() => _onSubmit()}>
          <Text>Add Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// 아래는 클래스형 컴포넌트이며 정상적으로 실행됨: 맨아래 export default ... 부분은 중복되므로 삭제하여야함.
// export default class City extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       locName: '',
//       description: '',
//     };
//   }

//   static navigationOptions = props => {
//     const {city} = props.navigation.state.params;
//     return {
//       title: city.city,
//       headerTitleStyle: {
//         fontSize: 18,
//         color: 'black',
//         fontWeight: '400',
//         textAlign: 'center',
//       },
//     };
//   };

//   _onChangeText = (key, val) => {
//     this.setState({[key]: val});
//   };

//   _onSubmitt = () => {
//     console.log('state in onSubmit of city: ');
//     const {city} = this.props.navigation.state.params;
//     const location = {
//       uuid: uuidV4(),
//       locName: this.state.locName,
//       description: this.state.description,
//     };

//     this.props.screenProps.addLocation(location, city);

//     this.setState({
//       locName: '',
//       description: '',
//     });
//   };

//   render() {
//     const {city} = this.props.navigation.state.params;
//     console.log('props in city: ', this.props);
//     console.log('state in city: ', this.state);
//     //console.log('cityInfo in city: ', cityInfo);
//     return (
//       <View style={styles.container}>
//         <ScrollView style={styles.scrollContainer}>
//           {city.locations.map((location, index) => (
//             <View key={index} style={styles.listContainer}>
//               <Text style={styles.locationText}>{location.locName}</Text>
//               <Text style={styles.subText}>{location.description}</Text>
//             </View>
//           ))}
//         </ScrollView>
//         <View style={styles.inputContainer}>
//           <TextInput
//             onChangeText={val => {
//               this._onChangeText('locName', val);
//             }}
//             value={this.state.locName}
//             style={styles.textInput}
//             placeholder="관광지를 입력하세요"
//           />
//           <TextInput
//             onChangeText={val => {
//               this._onChangeText('description', val);
//             }}
//             value={this.state.description}
//             style={styles.textInput}
//             placeholder="상세정보를 입력하세요"
//           />
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => this._onSubmitt()}>
//             <Text>Add Location</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

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

export default City;
