import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  ProgressBarAndroid,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/AntDesign';
import Iconf from 'react-native-vector-icons/Feather';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MyFile = ({navigation}) => {
  return (
    <>
  
      <ScrollView style={styles.main}>
        {/* first flex */}
        <View style={styles.first}>
          <View style={styles.circle}>
            <Iconss
              style={{padding: 10, fontWeight: 200}}
              name="arrowleft"
              size={30}
              color="black"
              onPress={() => navigation.navigate('File')}
            />
          </View>

          <Text
            style={{
              paddingTop: 10,
              fontWeight: 500,
              color: 'black',
              fontSize: 20,
            }}>
            My Files
          </Text>
          <View style={styles.circle}>
            <Icon
              style={{padding: 13}}
              name="search"
              size={20}
              color="black"
              onPress={() => navigation.navigate('Myfile')}
            />
          </View>
        </View>
        {/* second flex */}
        <View style={styles.second}>
          <View style={styles.button}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              My files
            </Text>
          </View>
          <View style={[styles.button, {backgroundColor: 'white'}]}>
            <Text>Shared</Text>
          </View>
        </View>

        {/* 3rd view */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <Text>
              Name{' '}
              <Iconf
                style={{marginTop: 13}}
                name="arrow-up"
                size={20}
                color="black"
                onPress={() => navigation.navigate('Myfile')}
              />
            </Text>
          </View>
          <Icon
            style={{padding: 13}}
            name="align-justify"
            size={20}
            color="black"
            onPress={() => navigation.navigate('Myfile')}
          />
        </View>
        {/* folder */}
        <View style={styles.folder}>
          <View style={styles.foldermain}>
            <View style={{alignItems: 'center', paddingTop: 40}}>
              <Icon name="folder" size={50} color="gray" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 8,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Projects</Text>
              <Icons
                style={{padding: 10}}
                name="dots-three-vertical"
                size={16}
                color="black"
                onPress={() => navigation.navigate('Myfile')}
              />
            </View>
          </View>
          <View style={styles.foldermain}>
            <View style={{alignItems: 'center', paddingTop: 40}}>
              <Icon name="folder" size={50} color="gray" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 8,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Memory Books
              </Text>
              <Icons
                style={{padding: 10}}
                name="dots-three-vertical"
                size={16}
                color="black"
                onPress={() => navigation.navigate('Myfile')}
              />
            </View>
          </View>
        </View>

        {/* project brief */}
        <View style={styles.projectbrief}>
          <View style={styles.brief}>
            <Image
              style={[styles.imgbox, {padding: 5}]}
              source={{
                uri: 'https://images.unsplash.com/photo-1596123068611-c89d922a0f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              }}
            />
            {/* flex */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text>
                <Icon name="file" size={15} color="green" /> {}
                Project Brief
              </Text>
              <Icons
                style={{paddingTop: 5}}
                name="dots-three-vertical"
                size={16}
                color="black"
                onPress={() => navigation.navigate('Myfile')}
              />
            </View>
          </View>
          <View style={styles.brief}>
            <Image
              style={[styles.imgbox, {padding: 5}]}
              source={{
                uri: 'https://media.istockphoto.com/id/1421966989/photo/cardboard-parcel-boxes-falling-on-violet-purple-background.jpg?b=1&s=170667a&w=0&k=20&c=68hyYiWT253ly7fhF596Wf-yHQRSGNbjvKIGi0zzKz0=',
              }}
            />
            {/* flex */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text>
                <Icon name="video-camera" size={15} color="red" /> {}
                Box Animation
              </Text>
              <Icons
                style={{paddingTop: 5}}
                name="dots-three-vertical"
                size={16}
                color="black"
                onPress={() => navigation.navigate('Myfile')}
              />
            </View>
          </View>
        </View>
        <View style={styles.projectbrief}>
          <View style={styles.brief}>
            <Image
              style={[styles.imgbox, {padding: 5}]}
              source={{
                uri: 'https://media.istockphoto.com/id/1392523991/photo/document-folders-ring-binders.jpg?b=1&s=170667a&w=0&k=20&c=o1rUp0MH5zbWOOJtwBApi1Bx7EzmJIrArEKwBJdmxcM=',

              }}
            />
            {/* flex */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text>
                <Icon name="folder" size={15} color="yellow" /> {}
                Photo memories
              </Text>
              <Icons
                style={{paddingTop: 5}}
                name="dots-three-vertical"
                size={16}
                color="black"
                onPress={() => navigation.navigate('Myfile')}
              />
            </View>
          </View>
          <View style={styles.brief}>
            <Image
              style={[styles.imgbox, {padding: 5}]}
              source={{
                uri: 'https://media.istockphoto.com/id/519158820/photo/squared-digital-camea.jpg?b=1&s=170667a&w=0&k=20&c=vh7EPQtG2fIvnmQAQ926hlbbggDUAiZpmKF3VMrQQEQ=',
              }}
            />
            {/* flex */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text>
                <Icon name="file" size={15} color="blue" /> {}
                Exploration
              </Text>
              <Icons
                style={{paddingTop: 5}}
                name="dots-three-vertical"
                size={16}
                color="black"
                onPress={() => navigation.navigate('Myfile')}
              />
            </View>
          </View>
        </View>
        <View style={styles.projectbrief}>
          <View style={styles.brief}>
            <Image
              style={[styles.imgbox, {padding: 5}]}
              source={{
                uri: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              }}
            />
            {/* flex */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text>
                <Icon name="video-camera" size={15} color="red" /> {}
                Box Animation
              </Text>
              <Icons
                style={{paddingTop: 5}}
                name="dots-three-vertical"
                size={16}
                color="black"
                onPress={() => navigation.navigate('Myfile')}
              />
            </View>
          </View>
          <View style={styles.brief}>
            <Image
              style={[styles.imgbox, {padding: 5}]}
              source={{
                uri: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              }}
            />
            {/* flex */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text>
                <Icon name="video-camera" size={15} color="red" /> {}
                Box Animation
              </Text>
              <Icons
                style={{paddingTop: 5}}
                name="dots-three-vertical"
                size={16}
                color="black"
                onPress={() => navigation.navigate('Myfile')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#e3e3ed',
    height: windowHeight,
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flex: 1,
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  second: {
    backgroundColor: 'white',
    width: windowWidth * 0.9,
    marginTop: 10,
    flexDirection: 'row',
    height: 60,
    borderRadius: 30,
    padding: 10,
    gap: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#6e81f7',
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  folder: {
    flexDirection: 'row',
    gap: 5,
  },
  foldermain: {
    flex: 1,
    height: windowHeight * 0.2,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: 'gray',
  },
  projectbrief: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  brief: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    height: windowHeight * 0.2,
    padding: 10,
  },
  imgbox: {
    height: windowHeight * 0.13,
    borderRadius: 20,
  },
});
export default MyFile;
