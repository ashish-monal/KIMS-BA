import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Recharge from './Recharge';

const BookingDetails = ({route, navigation}) => {
  const [search, setSearch] = useState('');
  const [name, setName] = useState(null);
  const PatientsList = [
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
  const familyMemberNames = PatientsList.map(member => member.name);
  const handleFamilyMemberSelect = value => {
    setName(value); // Store the selected member's name
  };
  const {timeSlot} = route.params;
  const handleSubmit = () => {
    Alert.alert('Alert', 'Are you sure want to book', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('DrawerNavigaton');
        },
      },
    ]);
  };
  return (
    <ScrollView style={styles.maincontainer}>
      <View
        style={{marginTop: 15, justifyContent: 'center', alignSelf: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Booking Details</Text>
      </View>
      <View
        style={{marginTop: 15, justifyContent: 'center', alignSelf: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Booking for time Slot {timeSlot.time}
        </Text>
      </View>
      <View
        style={{
          width: '80%',
          alignContent: 'center',
          alignSelf: 'center',
          marginTop: 15,
        }}>
        <TextInput
          value={search}
          left={<TextInput.Icon icon="clipboard-search" />}
          onChangeText={text => setSearch(text)}
          label={'Search by Patients Mobile No'}
          mode="outlined"
          style={{backgroundColor: 'white', borderRadius: 10}}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.bookingforHolder}>
          <Picker
            style={{borderWidth: 2, borderColor: 'red'}}
            selectedValue={name}
            onValueChange={handleFamilyMemberSelect}>
            <Picker.Item label="Select Name of Patients" value="" />
            {familyMemberNames.map((name, index) => (
              <Picker.Item key={index} label={name} value={name} />
            ))}
          </Picker>
        </View>
        {name != null && (
          <View style={styles.form}>
            <Text style={styles.text}>Book From wallet </Text>
            <Text style={styles.text}>
              Your Available Wallet Points - 5000
            </Text>
            <Text style={styles.text}>Remaining Wallet Points - 4800</Text>
            {/* <Recharge navigation={navigation}/> */}
            <View style={styles.inputholder}>
              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.button}>
                <Text style={styles.buttonText}>Book Slot</Text>
              </Button>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  form: {
    marginHorizontal: 15,
    marginBottom: 25,
  },
  bookingforHolder: {
    width: '85%',
    borderRadius: 5,
    backgroundColor: 'white',
    marginVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'gray',
  },
  inputholder: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    width: '100%',
  },
  button: {
    width: '90%',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
