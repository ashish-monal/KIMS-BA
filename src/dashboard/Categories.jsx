import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Categories = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.view}>
        <View style={styles.view2}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Select Spaciality')}>
            <Image
              source={require('../../assets/doc.png')}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.text}>Doctor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.imageholder}>
            <Image
              source={require('../../assets/hos.png')}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.text}>Hospital</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.imageholder}>
            <Image
              source={require('../../assets/lab.png')}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.text}>Pathology</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.imageholder}>
            <Image
              source={require('../../assets/books.png')}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.text}>Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  categoryholder: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    gap: 50,
  },
  view2: {
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    backgroundColor: 'white',
    borderRadius: 25,
    width: '45%',
  },
  text: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 18,
    fontWeight: '700',
  },
  image: {
    height: 150,
    width: 150,
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    alignSelf: 'center',
    marginVertical: '25%',
    alignContent:'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap:30,
  },
});
