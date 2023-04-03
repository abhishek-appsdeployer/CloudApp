import React from 'react';
import {Text, View} from 'react-native';
import RootNavigator from './Screen/RootNavigator';
import Splash from './Screen/Splash';
import 'react-native-gesture-handler';
import Sidebar from './Screen/Sidebar';

const App = () => {
  return (
    <>
      {/* <RootNavigator/> */}
      <Sidebar />
    </>
  );
};

export default App;
