import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import theme from '../theme/index';
import CreateMemberPage from '../pages/CreateMemberPage';
import InfoPage from '../pages/InfoPage';
import EditPage from '../pages/EditPage ';

const Stack = createStackNavigator();

export default function Navigation() {
  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTintColor: theme.colors.dark,
    headerTitleStyle: {
      textAlign: 'center',
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Info" screenOptions={screenOptions}>
        <Stack.Screen
          name="Info"
          component={InfoPage}
          options={{title: 'My Members'}}
        />
        <Stack.Screen
          name="Create"
          component={CreateMemberPage}
          options={{title: 'Add new member'}}
        />
        <Stack.Screen
          name="Edit"
          component={EditPage}
          options={{title: 'Edit member'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
