import {StyleSheet, Text, View, TouchableOpacity, FlatList,ScrollView,Alert} from 'react-native';
import React, {useState} from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import {TextInput, Button} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
const Withdrawal = () => {
  const [balance, setBalance] = useState(5000);
  const [showform, setShowForm] = useState(false);
  const [selectMethosd, setSelectMethod] = useState('');
  const [withdrawalamount, setWithdrawalAmount] = useState();
  const [showwithdrawalHistory, setWithdrawalHistory] = useState(false);

  const methodname = ['Bank Account', 'VPA'];
  const accountDetails = [
    {
      id: 1,
      bankaccountno: '12345678987654321',
      ifsccode: 'dummy123456',
    },
    {
      id: 2,
      upiid: 'dummy@ybl',
    },
  ];

  const historyDetails = [
    {
      id: 1,
      date: '10-10-2023',
      withdrawal: '200',
      status:'Success'
    },
    {
      id: 2,
      date: '09-10-2023',
      withdrawal: '500',
      status:'Pending'
    },
    {
      id: 3,
      date: '08-10-2023',
      withdrawal: '400',
      status:'Success'
    },
    {
      id: 4,
      date: '06-10-2023',
      withdrawal: '700',
      status:'Pending'
    },
  ];

  const renderItem = ({item}) => {

    return (
      <View style={styles.renderviewholder}>
        <View>
          <Text style={styles.texttransaction}>{item.date}</Text>
        </View>
        <View>
          <Text style={styles.texttransaction}>{item.withdrawal}</Text>
        </View>
        <View>
          <Text
            style={[
              styles.texttransaction,
              {
                textAlign: 'right',
                color: item.status === 'Success' ? 'green' : 'red',
              },
            ]}>
            {item.status}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.balance}>
        <Text style={styles.text}>Current Balance</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {fontSize: 35, marginLeft: 45}]}>
            {balance}
          </Text>
          <TouchableOpacity style={{marginLeft: 45}}>
            <Foundation name="refresh" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
            onPress={() => {
              setWithdrawalHistory(true);
              setShowForm(false);
              setWithdrawalAmount(null)
              setSelectMethod('');
            }}>
            <Text style={styles.text}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
            onPress={() => {
              setShowForm(true);
              setWithdrawalHistory(false);
            }}>
            <Text style={styles.text}>Request</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showform === true && (
        <View style={styles.form}>
          <View style={styles.inputholder}>
            <TextInput
              value={withdrawalamount}
              onChangeText={text => setWithdrawalAmount(text)}
              keyboardType="number-pad"
              label={'Reedem Points*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
        </View>
      )}
      {withdrawalamount != null && (
        <View style={styles.inputholder}>
        <Button
          mode="contained"
          onPress={() =>  Alert.alert("Requested","Request Success please wait...")}
          style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
      </View>
      )}
      {/* {withdrawalamount != null  &&  ( 
        <View style={styles.form}>
          <View style={styles.genderHolder}>
            <Picker
              style={{borderWidth: 2, borderColor: 'red'}}
              selectedValue={selectMethosd}
              onValueChange={itemValue => setSelectMethod(itemValue)}>
              <Picker.Item label="Select Method" value="" />
              {methodname.map((name, index) => (
                <Picker.Item key={index} label={name} value={name} />
              ))}
            </Picker>
          </View>
        </View>
      )}
      {selectMethosd === 'Bank Account' && (
        <View style={styles.form}>
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={accountDetails[0].bankaccountno}
              label={'Bank Account Details'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={accountDetails[0].ifsccode}
              label={'Bank IFSC Code'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          <View style={styles.inputholder}>
            <Button
              mode="contained"
              onPress={() =>  Alert.alert("Requested","Request Success please wait...")}
              style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </Button>
          </View>
        </View>
      )}
      {selectMethosd === 'VPA' && (
        <View style={styles.form}>
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={accountDetails[1].upiid}
              label={'UPI ID '}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          <View style={styles.inputholder}>
            <Button
              mode="contained"
              onPress={() =>  Alert.alert("Requested","Request Success please wait...")}
              style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </Button>
          </View>
        </View>
      )} */}
      {showwithdrawalHistory === true && (
        <View  style={{marginBottom:15}}>
        <FlatList
          data={historyDetails}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
         </View>
      )}
    </View>
  );
};

export default Withdrawal;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  balance: {
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 2,
    width: '85%',
    alignSelf: 'center',
    height: 'auto',
    borderRadius: 15,
    backgroundColor: 'green',
  },
  text: {
    marginTop: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
  renderviewholder: {
    borderColor: 'gray',
    borderWidth: 2,
    padding:10,
    borderRadius:15,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
    gap: 5,
    justifyContent: 'space-evenly',
  },
  texttransaction: {
    fontSize: 16,
    fontWeight: 'bold',
    // textAlign:'center'
  },
});
