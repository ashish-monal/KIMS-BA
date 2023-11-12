import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

const GeneralOnology = ({navigation}) => {
  const [search,setSearch] = useState('');
  const DoctorDetails = [
    {
      id: 1,
      doctorname: 'Dr. John Smith',
      doctorimage: 'image1.jpg',
      doctortitle: 'Cardiologist',
      doctorfee: '150',
      doctorhospital: 'City Hospital',
    },
    {
      id: 2,
      doctorname: 'Dr. Sarah Johnson',
      doctorimage: 'image2.jpg',
      doctortitle: 'Dermatologist',
      doctorfee: '120',
      doctorhospital: 'General Hospital',
    },
    {
      id: 3,
      doctorname: 'Dr. Michael Brown',
      doctorimage: 'image3.jpg',
      doctortitle: 'Pediatrician',
      doctorfee: '130',
      doctorhospital: 'Childrens Hospital',
    },
    {
      id: 4,
      doctorname: 'Dr. Lisa Davis',
      doctorimage: 'image4.jpg',
      doctortitle: 'Orthopedic Surgeon',
      doctorfee: '180',
      doctorhospital: 'Ortho Clinic',
    },
    {
      id: 5,
      doctorname: 'Dr. James Wilson',
      doctorimage: 'image5.jpg',
      doctortitle: 'Neurologist',
      doctorfee: '160',
      doctorhospital: 'Neuro Hospital',
    },
    {
      id: 6,
      doctorname: 'Dr. Emily Anderson',
      doctorimage: 'image6.jpg',
      doctortitle: 'Ophthalmologist',
      doctorfee: '140',
      doctorhospital: 'Eye Clinic',
    },
    {
      id: 7,
      doctorname: 'Dr. William Taylor',
      doctorimage: 'image7.jpg',
      doctortitle: 'ENT Specialist',
      doctorfee: '125',
      doctorhospital: 'ENT Clinic',
    },
    {
      id: 8,
      doctorname: 'Dr. Jennifer Clark',
      doctorimage: 'image8.jpg',
      doctortitle: 'Gynecologist',
      doctorfee: '135',
      doctorhospital: 'Women Hospital',
    },
    {
      id: 9,
      doctorname: 'Dr. Robert White',
      doctorimage: 'image9.jpg',
      doctortitle: 'Urologist',
      doctorfee: '155',
      doctorhospital: 'Urology Center',
    },
    {
      id: 10,
      doctorname: 'Dr. Laura Harris',
      doctorimage: 'image10.jpg',
      doctortitle: 'Psychiatrist',
      doctorfee: '170',
      doctorhospital: 'Psych Clinic',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.viewholder} onPress={()=> navigation.navigate('Doctor Details',{item})}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '35%'}}>
            <Image
              source={require('../../assets/doc.png')}
              resizeMode="contain"
              style={{height: 100, width: 75}}
            />
          </View>
          <View>
            <Text style={styles.text}>Name - {item.doctorname}</Text>
            <Text style={styles.text}>Specialist - {item.doctortitle}</Text>
            <Text style={styles.text}>Fee - {item.doctorfee}</Text>
            <Text style={styles.text}>Hospital - {item.doctorhospital}</Text>
          
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.maicontainer}>
      <View
        style={{
          width: '80%',
          alignContent: 'center',
          alignSelf: 'center',
          marginVertical: 15,
        }}>
        <TextInput
          value={search}
          left={<TextInput.Icon icon="clipboard-search" />}
          onChangeText={text => setSearch(text)}
          label={'Search doctor'}
          mode="outlined"
          style={{backgroundColor: 'white', borderRadius: 10}}
        />
      </View>
      <View style={{marginVertical: 10,marginBottom:100}}>
        <FlatList
          data={DoctorDetails}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default GeneralOnology;

const styles = StyleSheet.create({
  maicontainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  viewholder: {
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 2,
    width: '95%',
    alignSelf: 'center',
    padding: 10,
    overflow:'hidden',
   
  },
  text: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '700',
  },
});
