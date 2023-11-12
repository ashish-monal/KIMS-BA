import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const MemberList = ({navigation}) => {
  const familyMembers = [
    {
      name: 'Ashish Ranjan',
      dob: '15-08-2001',
      sex: 'Male',
      address: 'Village - Bairiya, Post - Bairiya',
      relation: 'Brother',
      aadhaarNo: '1234567890',
    },
    {
      name: 'Suraj Ranjan',
      dob: '01-02-1998',
      sex: 'Male',
      address: 'Village - Bairiya, Post - Bairiya',
      relation: 'Elder Brother',
      aadhaarNo: '9876543210',
    },
    {
      name: 'Goutam',
      dob: '01-02-1905',
      sex: 'Male',
      address: 'Village - Kolkata, Post - Patna',
      relation: 'Elder Brother',
      aadhaarNo: '2589631470',
    },
    {
      name: 'Sila',
      dob: '01-02-1998',
      sex: 'Female',
      address: 'Village - Durgapur, Post - West Bengal',
      relation: 'Sister',
      aadhaarNo: '9876543210',
    },
    {
      name: 'Sonu Kumar',
      dob: '01-09-2001',
      sex: 'Male',
      address: 'Village - Agra, Post - Uttar Pradesh',
      relation: 'Elder Brother',
      aadhaarNo: '9876543210',
    },
    {
      name: 'Suraj Ranjan',
      dob: '01-02-1998',
      sex: 'Male',
      address: 'Village - Bairiya, Post - Bairiya',
      relation: 'Elder Brother',
      aadhaarNo: '9876543210',
    },
    {
      name: 'Vikram',
      dob: '27-07-1958',
      sex: 'Male',
      address: 'Village - Bairiya, Post - Bairiya',
      relation: 'Son',
      aadhaarNo: '9876543210',
    },
    {
      name: 'Suraj Ranjan',
      dob: '01-02-1998',
      sex: 'Male',
      address: 'Village - Bairiya, Post - Bairiya',
      relation: 'Elder Brother',
      aadhaarNo: '9876543210',
    },

    // Add other family members here
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.viewholder} onPress={() => navigation.navigate('Paitients History',{item})}>
        <Text style={styles.text}>Name : - {item.name}</Text>
        <Text style={styles.text}>DOB : - {item.dob}</Text>
        <Text style={styles.text}>Gender : - {item.sex}</Text>
        <Text style={styles.text}>Address : - {item.address}</Text>
        {/* <Text style={styles.text}>Relation : - {item.relation}</Text> */}
        <Text style={styles.text}>Aadhaar No : - {item.aadhaarNo}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.maincontainer}>
      <FlatList
        data={familyMembers}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default MemberList;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  viewholder: {
    borderWidth: 2,
    borderColor: 'gray',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    elevation:5,
    backgroundColor:'white'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
