# Rn_ActionBook_Cities
리엑트네이티브 액션북 PART2 네비게이션
## react-navigation 용법

### - 라이브러리 설치
- react-navigation 4.x by Book
```js
yarn add react-native-gesture-handler react-native-reanimated
yarn add uuid react-navigation react-navigation-stack react-navigation-tabs
```

### - 앱 구조

src
- screen
  - AddCity.js
  - Cities.js
  - City.js
- components
  - CenterMessage.js
- index.js
- theme.js

### - 각 컴퍼넌트의 역할
- index.js: 네비게이션 설정
- app.js: 데이터와 메소드를 정의하고 이것을 앱 전체에서 사용할 수 있도록 screenPops로 전달한다.
- AddCity: 도시와 국가를 입력받는 두개의 TextInput을 가지고 있다
- Cities: App 컴퍼넌트의 데이터 Cities 를 screenProps로 전달받아 리스트로 보여주며, 리스팅된 도시를 클릭하면, 도시의 상세페이지로 이동한다.
- City: Cities 에 나열된 도시를 클릭하면 이동되는 페이지이며, 해당 도시에 있는 관광지를 보여주며 추가로 등록할수도 있다.
- CenterMessage: Cities 또는 City 의 내용이 없을때 보여주는 컴퍼넌트이다.
- Theme: 앱 전체의 테마를 지정하는 스타일 컴퍼넌트이다.


### 컴퍼넌트별 주요 기능코드 설명
#### Index.js
```js
//  Stack Navigator 생성하여 Cites, City 라우팅 설정
const StackNavi = createStackNavigator(
  {
    Cities: Cities,
    City: City,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
    },
  },
);

// Tab Navigator 생성하여 Cities 탭에는 Cities, City 두개의 스크린을 라우팅 지정하고
// AddCity탭에는 AddCity 스크린 한개만 라우팅
const TabNavi = createBottomTabNavigator({
  도시리스트: StackNavi,
  도시추가: AddCity,
});

const AppNavi = createAppContainer(TabNavi);

export default AppNavi;

```

#### App.js
```js

import AppNavi from './src';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  _AddCity = city => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({cities});
  };

  // 대상도시와 추가할 관광지를 인수로 받아서 해당도시에 관광지를 추가한다.
  // 굳이 인덱스를 뽑아내서 해야하는지 모르겠음 그냥 find로 해당 city를 바로 뽑아내면 안돼나? 나중에 해봐야겠음.
  _AddLocation = (location, city) => {
    const index = this.state.cities.findIndex(_city => {
      //인수로 받은 city와 동일한 id를 가진 대상도시를 cities에서 찾아 그 id를 받아온다.
      return _city.id === city.id;
    });

    const foundCity = this.state.cities[index];
    foundCity.locations.push(location); // 대상도시에 관광지를 추가한다.

    //추가할 도시의 id값을 중심으로 기존의 데이터를 쪼갠후 나열하여 cities에 다시 담는다.
    const cities = {
      ...this.state.cities.slice(0, index),
      foundCity,
      ...this.state.cities.slice(index + 1),
    };

    this.setState({cities});
  };

  render() {
    ...
}
```

#### AddCity.js

```js
...
   this.state = {
      city: '',
      country: '',
    };
  }
  // onChange 이벤트 핸들러
  _onChangeText = (key, value) => {
    this.setState({[key]: value});
  };
  //onPress  이벤트 핸들러
  _onSubmit = () => {
    console.log('in _onSubmit', this.props);
    if (!this.state.city || !this.state.country) {
      Alert.alert('도시와 국가를 입력해주세요');
    } else {
      // 인풋박스에 입력이 모두 있을경우 city 객체를 만들어서 App의 state cities에 업로드하고나서, 
      // 현재컴퍼넌트의 state를 비우고,
      // Cities 스크린으로 라우팅한다.
      const city = {
        city: this.state.city,
        country: this.state.country,
        uuid: uuidV4(),
        locations: [],
      };
      this.props.screenProps.addCity(city);
      this.setState(
        {
          city: '',
          country: '',
        },
        () => this.props.navigation.navigate('Cities'),
      );
    }
  };
...
```

#### Cities.js
```js

```
#### City.js
```js

```