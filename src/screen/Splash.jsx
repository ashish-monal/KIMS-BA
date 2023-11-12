import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //     // Navigate from Splash to Welcome after 3 seconds
      navigation.navigate('Welcome');
    }, 2000);
  }, []);
  return (
    <View style={styles.maincontainer}>
    <ImageBackground source={require('../../assets/splash.jpg')} resizeMode='cover' style={{flex:1,width:'100%',}}>
      {/* Image Holder */}
      <View style={styles.imageholder}>
        <Image
          source={require('../../assets/splashlogo.png')}
          style={styles.imagestyle}
          resizeMode="cover"
        />
      </View>
      <View style={[styles.textholder,{marginTop:5}]}>
        <Text style={[styles.text,{color:'white',fontSize:32,fontWeight:'bold'}]}>KIMS</Text>
      </View>
      <View style={[styles.textholder,{marginTop:15}]}>
        <Text style={[styles.text,{color:'blue',fontSize:22,fontWeight:'600',textAlign:'center'}]}>Welcome to the KIMS - BA System</Text>
      </View>
    </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    height: '100%',
    width:'100%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  imageholder: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  imagestyle: {
    height: 350,
    width: 300,
    marginTop:'25%',
  },
  textholder: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: 'gray',
    fontSize: 20,
    fontWeight: '700',
  },
});
