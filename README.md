# Rn_ActionBook_Cities
리엑트네이티브 액션북 PART2 네비게이션

### 최근 변경내용
- AddCity.js 를 함수형 컴퍼넌트로 리펙토링 완료함
- Cities.js 를 함수형 컴퍼넌트로 리펙토링 완료함
- City.js 를 함수형 컴퍼넌트로 리펙토링 완료함
- App.js 를 함수형 컴퍼넌트로 리펙토링 완료함


## react-navigation 주요기능(함수형컴 컴퍼넌트)

- 네비게이션을 이용하여 페이지 이동 및 프롭스를 전달
- 함수형 컴퍼넌트로 변경함에 따라 네비게이션 사용에 this.props를 사용하지 않음
- 함수형 컴퍼넌트의 경우 프롭스를 인자로 전달 받으므로 this.props... 형태로 사용할 필요없다.
```js
addCity = ({screenProps,navigation}){
  ...
  navigation.navigate('<이동할 스크린>') // 이동할경우
  navigation.navigate('<이동할 스크린>',{프롭스키:프롭스값}) // 이동하면서 두번째 인자값으로 프롭스를 전달할수 있다.
  navigation.state.params // 를 이용하여 네비게이트의 두번째 인자로 전달된 프롭스값을 받는쪽에서 참조할수 있다.
  screenProps.addCity(arg) // 스크린 프롭스로 전달된 메소드에 인자를 전달하는 예
}
// 아래는 클래스형 컴퍼넌트에서 navigation 사용할 경우임
// this.props.navigation.navigate('<라우팅위치>') // 를 이용하여 페이지를 이동한다.
// this.props.navigation.navigate('<라우팅위치>',{프롭스키:프롭스값}) // 의 두번째 인자로 프롭스를 전달할수 있다.
// this.props.navigation.state.params // 를 이용하여 네비게이트의 두번째 인자로 전달된 프롭스값을 받는쪽에서 참조할수 있다...
// ```   

- 네비게이션을 사용하여 라우팅할 경우 최상단 부모컴퍼넌트에서는 (주로 App 컴퍼넌트) screenProps 를 통해 상태 및 메서드를 전달할 수있다.
```js
<AppNavi  //라우터 컴퍼넌트
        screenProps={{
          cities: this.state.cities,  // state
          addCity: this._addCity,     // 메서드
          addLocation: this._addLocation, // 메서드
        }}
/>
```
- 라우터컴퍼넌트(여기서는 .src/index.js)에 등록된 모든 컴퍼넌트는 이를 프롭스로 전달받으며,
- this.props.screenProps 를 통해 사용할수 있다.
   예) const {cities, addCity, addLocation} = this.props.screenProps;

## 라이프사이클 메소드 shoudComponentUpdate 용법

- 아래의 예와 같이 해당 컴퍼넌트의 state 또는 프롭스값을 선택하여 변경이 있을경우만 랜더링하도록 할 수 있다.
```js
shouldComponentUpdate(nextProps, nextState) {
    const isChangedState = this.state !== nextState; //state 가 변경된 경우
    const isChangedProps = this.props.navigation !== nextProps.navigation; //props.navigation 이 변경된경우
    return isChangedState || isChangedProps;
  }
```

### - 라이브러리 설치
- react-navigation 4.x by Book
```js
yarn add react-native-gesture-handler react-native-reanimated
yarn add uuid react-navigation react-navigation-stack react-navigation-tabs
yarn add @react-native-community/async-storage //내장 async-storage 가 deprecated 되어 추후 따로 추가함.
```

### - 앱 구조

src
- screen
  - AddCity.js   // 도시와 국가를 등록하는 컴퍼넌트로서 두개의 TextInput 과 등록을 위한 TouchableOpacity 로 구성됨
  - Cities.js  // AddCity에서 등록된 City 컴퍼넌트를 리스팅하는 리스트컴퍼넌트
  - City.js  // Cities에서 리스팅된 도시를 클릭하면 이동되는 페이지이며, 여기서 관광지를 등록할 수 있다.
- components
  - CenterMessage.js //데이터가 없을때 보여주기 위한 컴퍼넌트
- index.js : 라우터 컴퍼넌트 <AppNavi />
- theme.js
App : 최상단 부모컴퍼넌트로서 라우터 컴퍼넌트인 <AppNavi />만을 랜더링하며, 이를통해 모든 라우터에 등록된 자식컴퍼넌트에 데이터나 메소드를 전달할수 있도록 한다.


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