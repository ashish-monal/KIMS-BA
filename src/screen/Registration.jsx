import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {TextInput, Button} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const Registration = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false); // variable for user password shown or hidden
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [sex, setSex] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  // const [ifsc, setIfsc] = useState('');
  // const [upiid, setupiId] = useState('');
  // const [accountNo, setAccountNo] = useState('');
  const [aadhaarNo, setAadhaarNo] = useState('');
  // const [panNo, setPanNo] = useState('');
  const [imageUpload, setImageUpload] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const Gender = ['Male', 'Female','Other'];
  const handleSubmit = () => {
    console.log("Submit Button Press ",name,formateDate(dob),sex,address,email,mobile,aadhaarNo,imageUpload,userId,password)
    if(name.trim() === ''){
      Alert.alert("Error","Please Enter the Name")
      return;
    }
    if(mobile.trim() === ''){
      Alert.alert("Error","Please Enter the Mobile no")
      return;
    }
    if(aadhaarNo.trim() === ''){
      Alert.alert("Error","Please Enter the Aadhaar No")
      return;
    }
    if(dob.trim() === ''){
      Alert.alert("Error","Please Enter the Date of Birth")
      return;
    }
    if(sex.trim() === ''){
      Alert.alert("Error","Please Enter the Gender")
      return;
    }
    if(userId.trim() === ''){
      Alert.alert("Error","Please Enter the User ID")
      return;
    }
    if(password.trim() === ''){
      Alert.alert("Error","Please Enter the password")
      return;
    }

    const formData =() => {
      name:name;
      dob:dob;
      gender:sex;
      address:address;
      email:email;
      mobile:mobile;
      aadhaarno:aadhaarNo;
      aadhaarupload:'abc';
      profileimage:'abc';
      userid:userId;
      password:password

    }
  }
 
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
  const formateDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  return (
    <ScrollView style={styles.maincontainer}>
      <ScrollView style={styles.form}>
        {/* Name */}
        <View style={styles.inputholder}>
          <TextInput
          value={name}
          onChangeText={text => setName(text)}
            keyboardType="default"
            label={'Name*'}
            mode="outlined"
            style={styles.textinput}
          />
        </View>
        {/* Date Of Birth */}
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
            keyboardType="default"
            label={'Address*'}
            mode="outlined"
            style={styles.textinput}
            onChangeText={text => setAddress(text)}
          />
        </View>
        {/* Email Id */}
        <View style={styles.inputholder}>
          <TextInput
            value={email}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            label={'Email'}
            mode="outlined"
            style={styles.textinput}
          />
        </View>
        {/* Mobile no */}
        <View style={styles.inputholder}>
          <TextInput
            value={mobile}
            onChangeText={text => setMobile(text)}
            maxLength={10}
            keyboardType="number-pad"
            label={'Mobile*'}
            mode="outlined"
            style={styles.textinput}
          />
        </View>
        {/* IFSC Code */}
        {/* <View style={styles.inputholder}>
          <TextInput
            value={ifsc}
            onChangeText={text => setIfsc(text)}
            maxLength={11}
            label={'IFSC Code*'}
            mode="outlined"
            style={styles.textinput}
          />
        </View> */}
        {/* Account No */}
        {/* <View style={styles.inputholder}>
          <TextInput
            maxLength={20}
            value={accountNo}
            onChangeText={text => setAccountNo(text)}
            keyboardType="number-pad"
            label={'Account No*'}
            mode="outlined"
            style={styles.textinput}
          />
        </View> */}
        {/* <View style={styles.inputholder}>
          <TextInput
            value={upiid}
            onChangeText={text => setupiId(text)}
            label={'UPI Id*'}
            mode="outlined"
            style={styles.textinput}
          />
        </View> */}
        {/* Aadhaar No */}
        <View style={styles.inputholder}>
          <TextInput
            value={aadhaarNo}
            onChangeText={text => setAadhaarNo(text)}
            maxLength={12}
            keyboardType="number-pad"
            label={'Aadhaar No'}
            mode="outlined"
            style={styles.textinput}
          />
        </View>
        {/* Aadhaar Upload */}
        <View style={styles.inputholder}>
          <TextInput
            label={'Aadhaar Upload'}
            mode="outlined"
            style={styles.textinput}
          />
        </View>
        {/* Pan No */}
        {/* <View style={styles.inputholder}>
          <TextInput
            maxLength={10}
            autoCapitalize="characters"
            label={'Pan No*'}
            mode="outlined"
            value={text}
            onChangeText={handleTextChange}
            style={styles.textinput}
          />
        </View> */}
        {/* Image Upload */}
        <View style={styles.inputholder}>
          <TextInput
            label={'Image Upload'}
            mode="outlined"
            style={styles.textinput}
          />
        </View>
        {/* User Id */}
        <View style={styles.inputholder}>
          <TextInput
            value={userId}
            onChangeText={text => setUserId(text)}
            label={'User Id*'}
            mode="outlined"
            style={styles.textinput}
          />
        </View>
        {/* Password */}
        <View style={styles.inputholder}>
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
            label={'Password*'}
            mode="outlined"
            style={styles.textinput}
            right={<TextInput.Icon
              icon={showPassword ? 'eye' : 'eye-off'}
              onPress={() => setShowPassword(!showPassword)} // Toggle showPassword state
            />}
          />
        </View>
        {/* Button */}
        <View style={styles.inputholder}>
          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </Button>
        </View>
        {/* Already have an account */}
      <TouchableOpacity style={styles.accountholder} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.account}>Already have an account ?</Text>
      </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    backgroundColor:'white'
  },
  titleHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderBottomWidth: 1,
    height: '7%',
  },
  headingText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  form: {
    flexDirection: 'column',
    marginHorizontal: 15,
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
  icon: {
    marginHorizontal:10
    // marginTop: 10,
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
  accountholder: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:15,
  },
  account: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});
