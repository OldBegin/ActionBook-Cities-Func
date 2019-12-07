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
  screen
    AddCity.js
    Cities.js
    City.js
  components
    CenterMessage.js
  index.js
  theme.j

### - 각 컴퍼넌트의 역할
index.js: 네비게이션 설정
app.js: 데이터와 메소드를 정의하고 이것을 앱 전체에서 사용할 수 있도록 screenPops로 전달한다.
AddCity: 도시와 국가를 입력받는 두개의 TextInput을 가지고 있다
Cities: App 컴퍼넌트의 데이터 Cities 를 screenProps로 전달받아 리스트로 보여주며, 리스팅된 도시를 클릭하면, 도시의 상세페이지로 이동한다.
City: Cities 에 나열된 도시를 클릭하면 이동되는 페이지이며, 해당 도시에 있는 관광지를 보여주며 추가로 등록할수도 있다.
CenterMessage: Cities 또는 City 의 내용이 없을때 보여주는 컴퍼넌트이다.
Theme: 앱 전체의 테마를 지정하는 스타일 컴퍼넌트이다.


