import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Splash = ({navigation}) => {
  const imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzyA9b3z54lVghQ5x_1No22k1Te1qMN_5uw&usqp=CAU';
  return (
    <View style={styles.main}>
      <Image style={styles.img} source={{uri: imageUrl}} />

      <View style={styles.cloud}>
        <Text style={styles.cloudText}>Cloud</Text>
        <Text style={styles.cloudText}>Storage</Text>
      </View>
      <Text style={{textAlign: 'center', paddingHorizontal: 20, fontSize: 18}}>
        We present all luxury appartment for occupancy and use{' '}
      </Text>

      {/* flex for icons */}
      <View style={styles.iconflex}>
        <View style={styles.circle}>
          {/* <Text style={{padding: 12,color:"#6e81f7",fontSize:24,fontWeight:500,textAlign:"center"}}>
            
            {""} */}
          <Icon
            onPress={() => navigation.navigate('File')}
            style={{padding: 20}}
            name="arrow-left"
            size={18}
            color="#6e81f7"
          />
          {/* </Text> */}
        </View>
        <View style={{paddingTop:10,flexDirection:"row",}}>
          <Icons name="dot-single" size={30} color="white" />
          <Icons name="dot-single" size={30} color="#6e81f7" />
          <Icons name="dot-single" size={30} color="white" />
        </View>
        <View
          style={[styles.circle, {backgroundColor: '#6e81f7'}]}
          onPress={() => navigation.navigate('File')}>
           <Icon
            onPress={() => navigation.navigate('File')}
            style={{padding: 20}}
            name="arrow-right"
            size={18}
            color="white"
          />
        </View>
      </View>
    </View>
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
  img: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    textAlign: 'center',
    alignItems: 'center',
    margin: 20,
  },
  cloud: {
    marginVertical: 20,
  },
  cloudText: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  },
  iconflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    marginTop: 50,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
  },
});

export default Splash;
