import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddFamilyMember = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [sex, setSex] = useState('');
  const [address, setAddess] = useState('');
  const [mobile,setMobile] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const Gender = ['Male', 'Female', 'Other'];

  const handleSubmit = () => {
    console.log('Family Member Details:', name, formateDate(dob), sex);
  };
  const formateDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
  return (
    <View style={styles.maincontainer}>
      {/* Heading Holdar */}
      <View style={styles.headingholder}>
        <Text style={styles.heading}>Add Patients by Filling the details </Text>
      </View>
      {/* Input Form Holder */}
      <ScrollView style={styles.form}>
        {/* Name */}
        <View style={styles.inputholder}>
          <TextInput
            value={name}
            label={'Name*'}
            mode="outlined"
            style={styles.textinput}
            onChangeText={text => setName(text)}
          />
        </View>
        {/* Date of Birth */}
        <TouchableOpacity
          style={styles.inputholder}
          onPress={() => setShowDatePicker(true)}>
          <TextInput
            value={formateDate(dob)}
            onChangeText={text => setDob(text)}
            editable={false}
            label={'Date of Birth* dd/mm/yyyy'}
            mode="outlined"
            style={styles.textinput}
          />
          {showDatePicker && (
            <DateTimePicker
              maximumDate={new Date()}
              value={dob}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </TouchableOpacity>
        {/* Gender */}
        <View style={styles.genderHolder}>
          <Picker
            style={{borderWidth: 2, borderColor: 'red'}}
            selectedValue={sex}
            onValueChange={itemValue => setSex(itemValue)}>
            <Picker.Item label="Select Gender" value="" />
            {Gender.map((gender, index) => (
              <Picker.Item key={index} label={gender} value={gender} />
            ))}
          </Picker>
          {/* <TextInput label={'Sex*'} mode="outlined" style={styles.textinput} /> */}
        </View>
        {/* Address */}
        <View style={styles.inputholder}>
          <TextInput
            value={address}
            label={'Address*'}
            mode="outlined"
            style={styles.textinput}
            onChangeText={text => setAddess(text)}
          />
        </View>
        {/* Aadhaar No */}
        <View style={styles.inputholder}>
          <TextInput
            value={mobile}
            onChangeText={text => setMobile(text)}
            maxLength={10}
            keyboardType="number-pad"
            label={'Mobile No*'}
            mode="outlined"
            style={styles.textinput}
          />
        </View>
        <View style={[styles.inputholder]}>
          <Button mode="contained" style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Add Patient</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddFamilyMember;

const styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headingholder: {
    marginVertical: 25,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
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
  form: {
    // flexDirection: 'column',
    marginHorizontal: 15,
    height: '80%',
    marginBottom: 25,
  },
  genderHolder: {
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
  button: {
    width: '90%',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 18,
    width: '100%',
  },
});
