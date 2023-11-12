import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {TextInput, Button} from 'react-native-paper';

const BookingService = () => {
  const [person, setPerson] = useState(null);
  const [relation, setRelation] = useState('');
  const [selectedFamilyMember, setSelectedFamilyMember] = useState(null);
  const [bookingwith, setBookingWith] = useState(null);
  const [name, setName] = useState('Ashish Ranjan');
  const [dob, setDob] = useState('15-08-2001');
  const [sex, setSex] = useState('Male');
  const [address, setAddress] = useState('Village - Bairiya, Post - Bairiya');
  const [bookingTypeName, setBookingTypeName] = useState('');
  const BookingFor = ['Self', 'Patient'];
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
  const bookingType = ['Doctor', 'Hospital', 'Pathology'];
  const DoctorCategories = [
    'Anesthesiologists',
    'Cardiologists',
    'Colon and Rectal Surgeons',
    'Dermatologists',
    'Endocrinologists',
    'Family Physicians',
    'Gastroenterologists',
  ];

  const familyMemberNames = familyMembers.map(member => member.name);

  const handleFamilyMemberSelect = value => {
    const selectedMember = familyMembers.find(member => member.name === value);
    setSelectedFamilyMember(selectedMember);
  };

  return (
    <ScrollView style={styles.maincontainer}>
      {/* Heading Holder */}
      <View style={styles.headingholder}>
        <Text style={styles.heading}>Booking for</Text>
      </View>
      {/* Booking picker for  */}
      <View style={styles.form}>
        <View style={styles.bookingforHolder}>
          <Picker
            style={{borderWidth: 2, borderColor: 'red'}}
            selectedValue={person}
            onValueChange={itemValue => setPerson(itemValue)}>
            <Picker.Item label="Select Booking For" value="" />
            {BookingFor.map((booking, index) => (
              <Picker.Item key={index} label={booking} value={booking} />
            ))}
          </Picker>
        </View>
      </View>
      {/* Selected form for the self */}
      {person === 'Self' && (
        <View style={styles.form}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: 'green',
            }}>
            Your Details
          </Text>
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={name}
              label={'Name*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* DOB */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={dob}
              label={'Date of Birth DD/MM/YYYY*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Sex */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={sex}
              label={'Gender*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Address */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={address}
              label={'Address*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
        </View>
      )}

      {/* Select the Name of Family Member from the list  */}
      {person === 'Patient' && (
        <View style={styles.form}>
          <View style={styles.bookingforHolder}>
            <Picker
              style={{borderWidth: 2, borderColor: 'red'}}
              selectedValue={relation}
              onValueChange={handleFamilyMemberSelect}>
              <Picker.Item label="Select Patient Name" value="" />
              {familyMemberNames.map((name, index) => (
                <Picker.Item key={index} label={name} value={name} />
              ))}
            </Picker>
          </View>
        </View>
      )}

      {selectedFamilyMember && (
        <View style={styles.form}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: 'green',
            }}>
            {selectedFamilyMember.name}'s Details
          </Text>
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={selectedFamilyMember.name}
              label={'Name*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={selectedFamilyMember.dob}
              label={'Date of Birth DD/MM/YYYY*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Sex */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={selectedFamilyMember.sex}
              label={'Gender*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Address */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={selectedFamilyMember.address}
              label={'Address*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Relation */}
          {/* <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={selectedFamilyMember.relation}
              label={'Relationship*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View> */}
        </View>
      )}

      {person != null && (
        <View style={styles.form}>
          <View style={styles.headingholder}>
            <Text style={styles.heading}>Select Booking With</Text>
          </View>
          <View style={styles.bookingforHolder}>
            <Picker
              style={{borderWidth: 2, borderColor: 'red'}}
              selectedValue={bookingTypeName}
              onValueChange={itemValue => setBookingTypeName(itemValue)}>
              <Picker.Item label="Select Booking Type" value="" />
              {bookingType.map((booking, index) => (
                <Picker.Item key={index} label={booking} value={booking} />
              ))}
            </Picker>
          </View>
        </View>
      )}
      {bookingTypeName === 'Doctor' && (
        <View style={styles.form}>
          <View style={styles.headingholder}>
            <Text style={styles.heading}>
              Select Booking With {bookingTypeName}
            </Text>
          </View>
          <View style={styles.bookingforHolder}>
            <Picker
              style={{borderWidth: 2, borderColor: 'red'}}
              selectedValue={bookingwith}
              onValueChange={itemValue => setBookingWith(itemValue)}>
              <Picker.Item label="Select Booking With" value="" />
              {DoctorCategories.map((categories, index) => (
                <Picker.Item
                  key={index}
                  label={categories}
                  value={categories}
                />
              ))}
            </Picker>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default BookingService;

const styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  headingholder: {
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  form: {
    marginHorizontal: 15,
    marginBottom: 25,
  },
  bookingforHolder: {
    width: '90%',
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
  textinput: {
    height: 65,
    width: '90%',
    backgroundColor: 'white',
  },
});
