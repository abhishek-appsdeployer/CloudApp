import React from 'react'
import * as Progress from 'react-native-progress';
import {View, Text, Dimensions, StyleSheet, Image,TextInput, ProgressBarAndroid,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Files = ({navigation}) => {
    const imageUrl ="data:image/jpeg;base64,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"
    const imgurl2 ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEX/////ySjouCb19fX/xxn/343/yCLntAD79eLntQz19/v90FL07+Dy2Zznthfx1Y3/xgDqwUr+/Pb/4pv79OL57tH68dj14a7y2JTpuir357/otx/y5cbqvkDsyWr08urszHfw37T/1WL/+u33wyf/8c3/67r/zDTsxlvvzXTpvDXrw1H64aL82H7/01r/13L/6rX/zkHyvQ7/2nn/12wbmxfQAAAFFUlEQVR4nO2dXXvaOgyASU7qELYFt5TBqTfWQtdubN3Wc/r/f9sC5SMkuAmSEik8ei+5qd9HcmzJbtLrKYqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKG0znkyHRaaTj9zDomI8i+MkLZPEyW2fe3AE9L/FLvSRxt8X3APEMkn8fmtH95V7iDiG8Zt+GS6ecA8Sw7RSMCO+4x4mnJs6gpliZx+qi6SWYOhC7pFCmaX1DMNkyj1UGON6ObrO0yvuwYKYvb1OdD+Ii7o5muGW3KOFcFfzOfOapl18nH6vn6RZmn7gHi6A5SmGbsY93NO5OkUwdJfc4z2dusv9hmX31ov+aYb/qqE81FAN5XOiYTj90AiTm2sphkeacRQkSfx52ExH71TD5nBpPGsikHIMw1W7q4F9ryjDrHj5du6GYXpJ/bSWZhimP87dMExuz90wjG/O3TB0pFNRoiFtS0+iYZhSBlGkYUJ5ziXS0FGuGCINw4TwyFmoIeGCIdMwJXya1ukmpkncNMnh6Ykj3IBXH8ykbvjpfdN8Grr8QNxnOsPrqhgmsy+DwT9NMxh8meVGQnnIVTUP09vm9TaSt/soUsawwtAtW/JbsT8kolwQKwyTu7ZCmAVxf5RJecZVYRi35rdid6MgHbZl6JbthTAL4i5NKU9iKwwvWzW83BkSbr2FGra2a+MyjMctGrbJ3rC12sL9GIx/Pr28a4n7YMvmh1+/Lx6w9X6F4X1ko8i0xU4w2P0UWTvHXd59y9AFIjB2jknaNwzvq/94S0QRIoxeQyEBfMVY+PLhMxQlmGHBN+o8htIEA/NMayhOMAviiNSQW+cIJgAujEcNuW2OYh/oDOUsE3nMC50ht8txTEBmKDOE2boP29kcMeQ28WFhN4rKhgJXileAi37ZUGqSBhFVDLlFvJDNQ24RH+YRJFg2lJuk/5+94R8iQ24RLxHwamZnDMHlU9FQbpJenLshuI9RNOQW8RJB+6YFQ7FbNvMOKFg0FJukEbSJUTTkFvFiwWc1XTE0UMGCodxpCGxhlAzlTsOfRIbcIl6A9X13DKFdqJKh3CQFVk4dMgR2g0uG3CJeLOKItBOG0AZGyVBukkIrp84YWsxdhbwht4gXcOVUMJS7ZQNXTgVDsUkKr5wKhtwiXuC3FLpiiNiyHRjKnYbwyunQUO40BDa7S4bcIl4s7j0E8g3hd4UKhnKT9OncDaH3aEqG3CJeMJVT3lDuWoHasuUMxSYpqnLKG3KLeEFVTp0wRFVOOUO503COFNwayp2G8Gb3oSG3iBdc5dQFwwgruDGUm6S/z94QVzntDblFvCDOnLphiGp25w3lJimycpJviPh3p0NDbhEvwEuzJUO5WzZkA2NnKDZJcc3uLhiiK6etIbeIH4q3mmWGcqchunLaGIpNUnzltDHkFvFCsGWTbUixZVsbyk1SxDWhjhgim907Q24RL9hm94brmFvEB8mWbWX4H7eJD3Sze2sYcZv4INmyyTYkehFtX6qh+UUj2OtbbhUPJJXTio9SDfHN7g1Ss5Rqrej1FkINLb4VvOXRVP+59iHada95EhlEqsVwxVeJjxqismLDs7w0pXvMrHkQF0RjiL+RPRc2Ew3wBRh+rgJReRo90n/lvC9I0diXJj58tniWkqhRQNO6KDOKIv44GmtGzX25bjF6tDbixNo5+l2lFfRvRhdsjP4QvlhXURRFURRFURRFURRFURRFURRFURRFURRFwfAX6SO7iQuKIEMAAAAASUVORK5CYII="
  return (
    <>
        <View style={styles.main}>
        {/* first flex explore */}
      <View style={styles.explore}>
      <Text style={{fontSize:25,fontFamily:"bold",color:"black",fontWeight:900}}>Let's Explore Files</Text>
      <View style={styles.exicon}>
    <Icon style={{padding:10}} name="align-left" size={20} color="black" onPress={()=>navigation.navigate("Activity")} />

      </View>

      </View>

      {/* 2nd flex started */}
      
      <View style={styles.search}>
      <View style={styles.exicon}>
    <Icons style={{padding:3}} name="swap-horizontal" size={30} color="black" />

      </View>
      <View style={styles.searchinput}>
      <TextInput
      style={{width:"80%"}}
        
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Icon style={{margin:10}} name="search" size={20} color="black" />

      </View>



      </View>
     
      {/*3rd flex for photos  */}
      <ScrollView horizontal={true} style={{marginTop:10}}>
      <View style={styles.photosflex}>
      <View style={styles.photo}>
      <Image style={styles.img} source={{uri: imageUrl}} />
      <Text style={{color:"black",fontSize:15,fontWeight:600}}>Photos</Text>
      <Text>18.21 GB</Text>

      </View>

      <View style={styles.photo}>
      <Image style={styles.img} source={{uri: "data:image/png;base64,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"}} />
      <Text style={{color:"black",fontSize:15,fontWeight:600}}>Videos</Text>
      <Text>32.61 GB</Text>

      </View>

      <View style={styles.photo}>
      <Image style={styles.img} source={{uri: "data:image/jpeg;base64,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"}} />
      <Text style={{color:"black",fontSize:15,fontWeight:600}}>Documents</Text>
      <Text>18.21 GB</Text>

      </View>

      </View>
      </ScrollView>


      {/* Recent files */}
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
    <Text style={{color:"black",fontSize:22,fontWeight:600}}>Recent Files</Text>
    <Text>View all</Text>
        
    </View>
    {/* Recent cards */}
    <ScrollView horizontal={true} style={{marginTop:5}}>
    <View style={[styles.photosflex,]}>
      <View style={[styles.photo,{backgroundColor:"#aca0b9"}]}>
      <Icon style={{textAlign:"center",paddingTop:20}} name="play" size={30} color="white" />

      </View>

      <View style={[styles.photo,{backgroundColor:"#8d8466"}]}>
      <Icon style={{textAlign:"center",paddingTop:20}} name="play" size={30} color="white" />

      </View>

      <View style={[styles.photo,{backgroundColor:"#a19cb5"}]}>
      <Icon style={{textAlign:"center",paddingTop:20}} name="play" size={30} color="white" />

      </View>

      </View>
      </ScrollView>
        
       
    {/* My Folder code */}
    
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
    <Text style={{color:"black",fontSize:22,fontWeight:600}}>My Folder</Text>
    <Text>View all</Text>
        
    </View>

    {/* box stated */}
    <View style={styles.box}>
    <View style={{flexDirection:"row",gap:10}}>
    <Image style={styles.img} source={{uri: imageUrl}} />
    <View>

   
    <View style={{flexDirection:"row",justifyContent:"space-between",gap:20}}>
    
    <Text style={{color:"black",fontWeight:500}}>My Favourite Pictures</Text>
    <Text>452 images</Text>

    </View>

    <View style={{flexDirection:"row",justifyContent:"space-between",gap:10,marginTop:10}}>
    
   
    <Text>452 images</Text>
    {/* <Progress.Bar progress={0.8} width={100} color="red" height={10} size={20} thickness={1} /> */}
    <ProgressBarAndroid style={styles.progressBar} styleAttr="Horizontal" color="#2196F3"  indeterminate={false}
          progress={0.5} width={120}  unfilledColor="white" />


    </View>

    </View>
    


    </View>
    

    </View>

    <View style={styles.box} onPress={()=>navigation.navigate("Activity")}>
    <View style={{flexDirection:"row",gap:10}}>
    <Image style={styles.img} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnauStPk_-5vMJFfLMDeSXFALH5ZtcCVNQg&usqp=CAU"}} />
    <View>

   
    <View style={{flexDirection:"row",justifyContent:"space-between",gap:20}}>
    
    <Text style={{color:"black",fontWeight:500}}>Personal Documents</Text>
    <Text style={{alignItems:"flex-end"}}>46 Files</Text>

    </View>

    <View style={{flexDirection:"row",justifyContent:"space-between",gap:10,marginTop:10}}>
    
   
    <Text>452 images</Text>
    {/* <Progress.Bar progress={0.8} width={100} color="red" height={10} size={20} thickness={1} /> */}
    <ProgressBarAndroid style={styles.progressBar} styleAttr="Horizontal" color="red"  indeterminate={false}
          progress={0.5} width={120} height={22} />


    </View>

    </View>
    


    </View>
    

    </View>


        
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    main: {
      backgroundColor: '#e3e3ed',
      height: windowHeight,
      padding: 10,
      margin: 10,
      borderRadius: 20,
      flex:1
    },
   explore:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:8,
    marginTop:20
   },
   exicon:{
    width:50,
    height:50,
    borderRadius:15,
    backgroundColor:"white",
    padding:5

   },
   search:{
    flexDirection:"row",
    gap:10,
    paddingHorizontal:8,
    marginTop:20
   },
   searchinput:{
    backgroundColor:"white",
    borderRadius:20,
    width:"80%",
    flexDirection:"row",
    padding:1,
    justifyContent:"space-between",
   },
   photosflex:{
    flexDirection:"row",
    gap:10,
    
   
   },
   photo:{
    width:130,
    height:130,
    borderRadius:20,
    backgroundColor:"white",
    
    padding:20
   },
   img:{
    width:40,
    height:40,
    
   
   
  },
  box:{
   marginTop:10,
    borderRadius:10,
    height:70,
    width:"95%",
    backgroundColor:"white",
    padding:10

  },
  progressBar: {
    width: 100,
    transform: [{ scaleX: 1.0 }, { scaleY: 1.5 }],
  }
  });

export default Files
