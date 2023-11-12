import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        source={require('../../assets/welcome.jpg')}
        style={{width: '100%', height: '100%'}}>
        {/* Heading Holder */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flex: 1,
          }}>
          <View style={styles.heading}>
            <Text style={[styles.text, {color: 'blue'}]}>
              Welcome to the KIMS
            </Text>
          </View>
          {/* Image Holder */}
          <View style={styles.imageholder}>
            <Image
              source={require('../../assets/splashlogo.png')}
              style={styles.imagestyle}
              resizeMode="cover"
            />
          </View>
          <View style={styles.heading}>
            <Text style={[styles.text, {color: 'white',fontSize:24,fontWeight:'700'}]}>
              Welcome to KIMS System for BA
            </Text>
          </View>
          {/* Button Holder */}
          <View style={styles.buttonholder}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.text}>Registration</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  imageholder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  imagestyle: {
    height: 350,
    width: 300,
  },
  buttonholder: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 2,
    backgroundColor: 'blue',
    borderRadius: 25,
    height: 50,
    width: 200,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});
