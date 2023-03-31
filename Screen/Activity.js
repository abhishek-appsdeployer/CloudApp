import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  ProgressBarAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/AntDesign';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Activity = ({navigation}) => {
  const imgurl =
    'data:image/jpeg;base64,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';

  return (
    <>
      <View style={styles.main}>
        {/* First flex */}
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
            Activity
          </Text>
          <View style={styles.circle}>
            <Icons
              style={{padding: 10}}
              name="dots-three-vertical"
              size={30}
              color="black"
              onPress={() => navigation.navigate('Myfile')}
            />
          </View>
        </View>

        {/* second flex */}
        <View style={styles.second}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 500}}>Statistics</Text>
            <Text style={{fontWeight: 500}}>This Week</Text>
          </View>
          <Image
            style={styles.imggraph}
            source={{
              uri: 'https://www.shutterstock.com/image-vector/set-different-graphs-charts-infographics-260nw-1543285814.jpg',
            }}
          />
        </View>

        {/* Recent files */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: 'black',
              paddingTop: 10,
            }}>
            Recent Files
          </Text>
          <Text style={{color: 'blue', paddingTop: 18, fontWeight: 600}}>
            See All
          </Text>
        </View>

        {/* iamge uploaded  */}
        <View style={styles.upload}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 600, fontSize: 16, color: 'black'}}>
              6 Images uplaoded
            </Text>
            <View style={{flexDirection: 'row',marginLeft:50}}>
              <Image
                style={styles.imgcartoon}
                source={{
                  uri: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                }}
              />
              <View style={{position: 'relative', left: -10}}>
                <Image
                  style={[styles.imgcartoon, {padding: 5}]}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                  }}
                />
              </View>
              <View style={{position: 'relative', left: -20}}>
                <View style={styles.twobox}>
                  <Text style={{color:"white",padding:10,fontWeight:600}}>+2</Text>
                </View>
              </View>
            </View>
            <View></View>
          </View>

          {/* photos */}
          <View style={styles.photo}>
            <View style={styles.photof}>
              <Image style={styles.img} source={{uri: imgurl}} />
            </View>
            <View style={styles.photos}>
              <View style={styles.photosec}>
                <View style={styles.photosecf}>
                  <Image
                    style={styles.imgsec}
                    source={{
                      uri: 'https://images.unsplash.com/photo-1534057308991-b9b3a578f1b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    }}
                  />
                </View>
                <View style={styles.photosecs}>
                  <Image
                    style={styles.imgsec}
                    source={{
                      uri: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    }}
                  />
                </View>
              </View>
              <View style={styles.photosec}>
                <View style={styles.photosecf}>
                  <Image
                    style={styles.imgsec}
                    source={{
                      uri: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    }}
                  />
                </View>
                <View style={styles.photosecs}>
                  <Image
                    style={styles.imgsec}
                    source={{
                      uri: 'https://images.unsplash.com/photo-1544003484-3cd181d17917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* last dive */}
        <View style={styles.last}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              1 Video uploaded
            </Text>
            <View style={{flexDirection: 'row',marginLeft:30}}>
              <Image
                style={styles.imgcartoon}
                source={{
                  uri: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                }}
              />
              <View style={{position: 'relative', left: -10}}>
                <Image
                  style={[styles.imgcartoon, {padding: 5}]}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                  }}
                />
              </View>
              <View style={{position: 'relative', left: -20}}>
                <View style={styles.twobox}>
                  <Text style={{color:"white",padding:10,fontWeight:600}}>+2</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={{fontWeight: 600}}>Photos {'>'} Project</Text>
          {/* folder */}
          <View style={styles.folder}>
            <View style={styles.fol}>
              <Icon
                style={{padding: 13, fontWeight: 200}}
                name="folder"
                size={30}
                color="white"
                onPress={() => navigation.navigate('File')}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'black',
                  paddingTop: 8,
                }}>
                Explanatiion Video.mp4
              </Text>
              <Text>200 M.B</Text>
            </View>
            <View style={styles.play}>
              <Icon
                style={{padding: 13, fontWeight: 200}}
                name="play"
                size={15}
                color="white"
                onPress={() => navigation.navigate('File')}
              />
            </View>
          </View>
        </View>
      </View>
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
    height: windowHeight * 0.3,
    width: windowWidth * 0.9,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 15,
    marginTop: 8,
  },
  upload: {
    height: windowHeight * 0.3,
    width: windowWidth * 0.9,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 15,
    marginTop: 10,
  },
  photo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    padding: 10,
  },
  photof: {
    flex: 1,
  },
  photos: {
    flex: 1,
  },
  img: {
    width: windowWidth * 0.37,
    height: 150,
    padding: 20,
    borderRadius: 20,
  },
  imgsec: {
    width: windowWidth * 0.16,
    height: 60,
    padding: 20,
    borderRadius: 20,
  },

  imgcartoon: {
    width: 40,
    height: 40,

    borderRadius: 20,
  },
  twobox: {
    width: 40,
    height: 40,
    borderRadius:20,

    backgroundColor:"#6e81f7"
  },
  photosec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
    padding: 10,
  },
  photosecf: {
    flex: 1,
  },
  photosecs: {
    flex: 1,
  },
  last: {
    height: windowHeight * 0.2,
    width: windowWidth * 0.9,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 15,
    marginTop: 10,
  },
  folder: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },
  fol: {
    width: 50,
    height: 50,
    backgroundColor: '#b6a0bd',
    borderRadius: 20,
  },
  play: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#a9b3f8',
  },
  imggraph: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.22,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default Activity;
