import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text, Image} from 'react-native';
import 'react-native-gesture-handler';
import Splash from './Splash';
import Files from './Files';
import Activity from './Activity';
import MyFile from './MyFile';
import {Icon} from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome';
// import Iconicons from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            padding: 16,
            flexDirection: 'row',
            gap: 30,
            alignContent: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 20,
              backgroundColor: '#6e81f7',
            }}>
            <Icons
              style={{padding: 15}}
              name="align-left"
              size={20}
              color="black"
              onPress={() => navigation.navigate('Activity')}
            />
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#6e81f7',
            }}>
            <Image
              style={{height: 40, width: 40, margin: 5, borderRadius: 20}}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
          </View>
        </View>
        <DrawerItemList {...props} />
        <View style={{padding: 16}}>
          <View
            style={{
              width: 240,
              height: 170,
              backgroundColor: '#6e81f7',
              borderRadius: 40,
              padding: 20,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              Upgrade more storage
            </Text>
            <Text style={{padding: 20, fontWeight: 'bold'}}>
              Get extra 50 GB storage
            </Text>
            <View
              style={{borderRadius: 20, backgroundColor: 'blue', padding: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                <Icons
                  name="upload"
                  size={20}
                  color="white"
                  onPress={() => navigation.navigate('Activity')}
                />
                {'  '}
                Upgrade storage
              </Text>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name="Home"
            component={Splash}
            options={{
              drawerIcon: ({focused, size}) => {
                const iconName = 'home';
                return (
                  <View
                    style={{
                      backgroundColor: '#aca0b9',
                      borderRadius: 10,
                      padding: 5,
                    }}>
                    <Icon name={iconName} size={size} color="blue" />
                  </View>
                );
              },
              headerShown: false,
              drawerLabelStyle: { marginLeft: -16 }
            }}
          />
          <Drawer.Screen
            name="File"
            component={Files}
            options={{
              drawerIcon: ({focused, size}) => {
                const iconName = 'folder';
                return (
                  <View
                    style={{
                      backgroundColor: 'gray',
                      borderRadius: 10,
                      padding: 5,
                    }}>
                    <Icon name={iconName} size={size} color="white" />
                  </View>
                );
              },
              headerShown: false,
              drawerLabelStyle: { marginLeft: -16 }
            }}
          />
          <Drawer.Screen
            name="Activity"
            component={Activity}
            options={{
              drawerIcon: ({focused, size}) => {
                const iconName = 'notifications';
                return (
                  <View
                    style={{
                      backgroundColor: 'red',
                      borderRadius: 10,
                      padding: 5,
                    }}>
                    <Icon name={iconName} size={size} color="white" />
                  </View>
                );
              },
              headerShown: false,
              drawerLabelStyle: { marginLeft: -16 }
            }}
          />
          <Drawer.Screen
            name="Myfile"
            component={MyFile}
            options={{
              drawerIcon: ({focused, size}) => {
                const iconName = 'share';
                return (
                  <View
                    style={{
                      backgroundColor: '#6e81f7',
                      borderRadius: 10,
                      padding: 5,
                      
                    }}>
                    <Icon name={iconName} size={size} color="white" />
                  </View>
                );
              },
              headerShown: false,
              drawerLabelStyle: { marginLeft: -16 }
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Sidebar;
