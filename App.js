
import { createStackNavigator } from "react-navigation";
import Screen1 from "./components/Screen1"
import Screen2 from "./components/Screen2"
import Screen3 from "./components/Screen3"
const App = createStackNavigator({
  s1: { screen: Screen1 },
  s2: { screen: Screen2 },
  s3: { screen: Screen3 },
});

export default App;