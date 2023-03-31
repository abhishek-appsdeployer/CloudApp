import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Splash from './Splash';
import Files from './Files';
import Activity from './Activity';
import MyFile from './MyFile';

const RootNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            options={{headerShown: false}}
            component={Splash}
          />

          <Stack.Screen
            name="File"
            options={{headerShown: false}}
            component={Files}
          />
          <Stack.Screen
            name="Activity"
            options={{headerShown: false}}
            component={Activity}
          />

          <Stack.Screen
            name="Myfile"
            options={{headerShown: false}}
            component={MyFile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
