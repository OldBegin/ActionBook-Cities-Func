//import React, {Component} from 'react';
import React, {useState} from 'react';

import AppNavi from './src';

const App = () => {
  console.log('App에 진입했음');
  // useEffect(() => {
  //   console.log('App 의 랜더링이 완료됨');
  //   console.log('ciites ', cities);
  // });
  const [cities, setCities] = useState([]);

  const _addCity = city => {
    console.log('city in _addCity: ', city);
    const _cities = cities;
    _cities.push(city);
    setCities(_cities);
  };

  // 대상도시와 추가할 관광지를 인수로 받아서 해당도시에 관광지를 추가한다.
  const _addLocation = (location, city) => {
    const index = cities.findIndex(item => {
      //인 수로 받은 city와 동일한 id를 가진 대상도시를 cities에서 찾아 그 id를 받아온다.
      return item.uuid === city.uuid;
    });
    //console.log('index: ', index);

    const foundCity = cities[index];
    foundCity.locations.push(location); // 대상도시에 관광지를 추가한다.
    const _cities = [
      ...cities.slice(0, index), //추가할 도시의 id값을 중심으로 기존의 데이터를 쪼갠후 나열하여 cities에 다시 담는다.
      foundCity,
      ...cities.slice(index + 1),
    ];
    setCities(_cities);
  };

  return (
    <AppNavi
      screenProps={{
        cities: cities,
        addCity: _addCity,
        addLocation: _addLocation,
      }}
    />
  );
};
export default App;

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cities: [],
//     };
//   }

//   _addCity = city => {
//     const cities = this.state.cities;
//     cities.push(city);
//     this.setState({cities});
//     //console.log('state in App::', this.state);
//   };

//   // 대상도시와 추가할 관광지를 인수로 받아서 해당도시에 관광지를 추가한다.
//   _addLocation = (location, city) => {
//     console.log('addLocation in App', location, city);
//     const index = this.state.cities.findIndex(item => {
//       //인 수로 받은 city와 동일한 id를 가진 대상도시를 cities에서 찾아 그 id를 받아온다.
//       return item.uuid === city.uuid;
//     });
//     //console.log('index: ', index);

//     const foundCity = this.state.cities[index];
//     foundCity.locations.push(location); // 대상도시에 관광지를 추가한다.
//     //console.log('foundCity', foundCity.uuid);
//     const cities = [
//       ...this.state.cities.slice(0, index), //추가할 도시의 id값을 중심으로 기존의 데이터를 쪼갠후 나열하여 cities에 다시 담는다.
//       foundCity,
//       ...this.state.cities.slice(index + 1),
//     ];

//     this.setState({cities});
//   };

//   render() {
//     return (
//       <AppNavi
//         screenProps={{
//           cities: this.state.cities,
//           addCity: this._addCity,
//           addLocation: this._addLocation,
//         }}
//       />
//     );
//   }
// }
