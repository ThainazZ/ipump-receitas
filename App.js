import Receitas from './src/telas/Servicos';
import LoginScreen from './src/telas/Login';
import { NavigationContainer } from "@react-navigation/native";
import { Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from './src/telas/Receitas/mainscreen';
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <StatusBar />
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};


export default App;

