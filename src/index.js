import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AddCity from './screens/AddCity';
import Cities from './screens/Cities';
import City from './screens/City';

import {colors} from './theme';

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
  CityList: StackNavi,
  AddCity: AddCity,
});

const AppNavi = createAppContainer(TabNavi);

export default AppNavi;
