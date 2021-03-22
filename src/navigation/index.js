import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import InfoPage from '../pages/InfoPage';
import EditPage from '../pages/EditPage ';
import LoginPage from '../pages/LoginPage';

const Stack = createStackNavigator();

export default function App() {
  const isAuth = useSelector(state => state.user.isAuth);

  return (
    <NavigationContainer>
      {isAuth ? (
        <Stack.Navigator>
          <Stack.Screen name="Info" component={InfoPage} />
          <Stack.Screen name="Edit" component={EditPage} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
