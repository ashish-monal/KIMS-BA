import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {TextInput, Button} from 'react-native-paper';

const Recharge = ({navigation}) => {
  const [transaction, setTransaction] = useState('');
  const [onlineTransaction, setOnlineTransaction] = useState('');
  const TransactionType = ['Online', 'Ofline'];
  const TransactionTypeOnline = [
    {
      id: 1,
      name: 'Bank Transfer',
      bankdetails: [
        {
          id: 1,
          bankName: 'State Bank Of India',
          bankaccountnumber: '1234567890',
          bankIfsccode: 'SBIN002588',
          bankaddress: 'Address India',
          bankholdername: 'Abc Kumar',
          image: 'null',
        },
      ],
    },
    {
      id: 2,
      name: 'QR Code',
      bankaddress: [
        {
          id: 1,
          image: '../../assets/qrcode.jpg',
        },
      ],
    },
    {
      id: 3,
      name: 'VPA',
      bankdetails: [
        {
          id: 1,
          upiid: 'abc@pytm',
        },
      ],
    },
  ];
  const renderBankDetails = () => {
    if (onlineTransaction === 'Bank Transfer') {
      // If the user selects 'Bank Transfer' for onlineTransaction
      const bankDetail = TransactionTypeOnline.find(
        item => item.name === 'Bank Transfer',
      );
      if (bankDetail) {
        // Display the bank details here
        return (
          <>
            <View style={styles.bankDetails}>
              <Text style={styles.text}>
                Account Number: {bankDetail.bankdetails[0].bankaccountnumber}
              </Text>
              <Text style={styles.text}>
                IFSC Code: {bankDetail.bankdetails[0].bankIfsccode}
              </Text>
            </View>
            <View
              style={[styles.inputholder, {width: '90%', alignSelf: 'center'}]}>
              <TextInput
                keyboardType="number-pad"
                label={'Amount*'}
                mode="outlined"
                style={styles.textinput}
              />
            </View>
            <View style={styles.form}>
              <TouchableOpacity style={styles.inputholder}>
                <TextInput
                  editable={false}
                  label={'Upload Payment Receipt*'}
                  mode="outlined"
                  style={styles.textinput}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputholder}>
              <Button
                mode="contained"
                style={styles.button}
                onPress={() =>Alert.alert('Sucsess',"Payment Receipt Submitted Successfully")}>
                <Text style={styles.buttonText}>Submit</Text>
              </Button>
            </View>
          </>
        );
      }
    } else if (onlineTransaction === 'QR Code') {
      // If the user selects 'Bank Transfer' for onlineTransaction
      const bankDetail = TransactionTypeOnline.find(
        item => item.name === 'QR Code',
      );
      if (bankDetail) {
        // Display the bank details here
        return (
          <>
            <View style={styles.bankDetails}>
              <Image
                source={require('../../assets/qrcode.jpg')}
                style={{height: 400, width: 300}}
                resizeMode="contain"
              />
            </View>
            <View
              style={[styles.inputholder, {width: '90%', alignSelf: 'center'}]}>
              <TextInput
                keyboardType="number-pad"
                label={'Amount*'}
                mode="outlined"
                style={styles.textinput}
              />
            </View>
            <View style={styles.form}>
              <TouchableOpacity style={styles.inputholder}>
                <TextInput
                  editable={false}
                  label={'Upload Payment Receipt*'}
                  mode="outlined"
                  style={styles.textinput}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputholder}>
              <Button
                mode="contained"
                style={styles.button}
                onPress={() =>Alert.alert('Sucsess',"Payment Receipt Submitted Successfully")}>
                <Text style={styles.buttonText}>Submit</Text>
              </Button>
            </View>
          </>
        );
      }
    } else if (onlineTransaction === 'VPA') {
      // If the user selects 'Bank Transfer' for onlineTransaction
      const bankDetail = TransactionTypeOnline.find(
        item => item.name === 'VPA',
      );
      if (bankDetail) {
        // Display the bank details here
        return (
          <>
            <View style={styles.bankDetails}>
              <Text style={styles.text}>{bankDetail.bankdetails[0].upiid}</Text>
            </View>
            <View
              style={[styles.inputholder, {width: '90%', alignSelf: 'center'}]}>
              <TextInput
                keyboardType="number-pad"
                label={'Amount*'}
                mode="outlined"
                style={styles.textinput}
              />
            </View>
            <View style={styles.form}>
              <TouchableOpacity style={styles.inputholder}>
                <TextInput
                  editable={false}
                  label={'Upload Payment Receipt*'}
                  mode="outlined"
                  style={styles.textinput}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputholder}>
              <Button
                mode="contained"
                style={styles.button}
                onPress={() =>Alert.alert('Sucsess',"Payment Receipt Submitted Successfully")}>
                <Text style={styles.buttonText}>Submit</Text>
              </Button>
            </View>
          </>
        );
      }
    }
    return null;
  };
  return (
    <ScrollView style={styles.maincontainer}>
      <View style={styles.rechargeholder}>
        <Picker
          style={{borderWidth: 2, borderColor: 'red'}}
          selectedValue={transaction}
          onValueChange={itemValue => setTransaction(itemValue)}>
          <Picker.Item label="Select Transaction Type" value="" />
          {TransactionType.map((booking, index) => (
            <Picker.Item key={index} label={booking} value={booking} />
          ))}
        </Picker>
      </View>
      {transaction === 'Ofline' && (
        <View style={styles.form}>
          <TouchableOpacity style={styles.inputholder}>
            <View style={styles.inputholder}>
              <TextInput
                keyboardType="number-pad"
                label={'Amount*'}
                mode="outlined"
                style={styles.textinput}
              />
            </View>
            <TextInput
              editable={false}
              label={'Upload Payment Receipt*'}
              mode="outlined"
              style={styles.textinput}
            />
          </TouchableOpacity>
          <View style={styles.inputholder}>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() =>Alert.alert('Sucsess',"Payment Receipt Submitted Successfully")}>
              <Text style={styles.buttonText}>Submit</Text>
            </Button>
          </View>
        </View>
      )}
      {transaction === 'Online' && (
        <>
          <View style={styles.rechargeholder}>
            <Picker
              style={{borderWidth: 2, borderColor: 'red'}}
              selectedValue={onlineTransaction}
              onValueChange={itemValue => setOnlineTransaction(itemValue)}>
              <Picker.Item label="Select Online Transaction Type" value="" />
              {TransactionTypeOnline.map((booking, index) => (
                <Picker.Item
                  key={index}
                  label={booking.name}
                  value={booking.name}
                />
              ))}
            </Picker>
          </View>
          {renderBankDetails()}
        </>
      )}
    </ScrollView>
  );
};

export default Recharge;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    // height: '100%',
  },
  rechargeholder: {
    borderColor: 'green',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    height: 'auto',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  inputholder: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  textinput: {
    height: 55,
    width: '85%',
    backgroundColor: 'white',
  },
  form: {
    flexDirection: 'column',
    marginHorizontal: 15,
  },
  bankDetails: {
    marginTop: 15,
    padding: 15,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    elevation: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
  },
  button: {
    width: '90%',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    width: '100%',
  },
});
