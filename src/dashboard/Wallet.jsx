import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
const Wallet = ({navigation}) => {
  const [balance, setBalance] = useState(5000);
  const [commision,setCommision] = useState(0);
  
  const transaction = [
    {
      id: 1,
      date: '10:10:2023',
      patientsName: 'Ashish Ranjan',
      serviceName: 'Blood Test',
      commisionAmount: '600',
      credit: 'Yes',
    },
    {
      id: 2,
      date: '04:10:2023',
      patientsName: 'Salim Khan',
      serviceName: 'CITI SCAN',
      commisionAmount: '50',
      credit: 'Yes',
      debit: 'No',
    },
    {
      id: 3,
      date: '05:10:2023',
      patientsName: 'Suman Kumar',
      serviceName: 'Sugar Test',
      commisionAmount: '300',
      credit: 'Yes',
      debit: 'No',
    },
    {
      id: 4,
      date: '06:10:2023',
      patientsName: 'Wallet',
      serviceName: 'Blood Test',
      commisionAmount: '200',
      credit: 'Yes',
      debit: 'No',
    },
    {
      id: 5,
      date: '07:10:2023',
      patientsName: 'User',
      serviceName: 'Reedem',
      commisionAmount: '500',
      credit: 'No',
      debit: 'Yes',
    },
    {
      id: 6,
      date: '08:10:2023',
      patientsName: 'Ashish Ranjan',
      serviceName: 'Reedem',
      commisionAmount: '400',
      credit: 'No',
      debit: 'Yes',
    },
  ];
  // useEffect (() => {
  //   let total =0;
  //   transaction.forEach((item) => {
  //     if(item.credit === 'Yes') {
  //       total= total+parseInt(item.commisionAmount);
  //     }else if(item.debit === 'Yes'){
  //       total = total - parseInt(item.commisionAmount)
  //     }
  //   });
  //   setCommision(total);
  //   setBalance(balance + total)
  // },[])
  const renderItem = ({item}) => {
    return (
      <View style={styles.renderviewholder}>
        <View style={{width:'25%'}}>
        <Text style={styles.texttransaction}>{item.date}</Text>
        </View>
        <View style={{width:'35%'}}>
        <Text style={styles.texttransaction}>{item.patientsName}</Text>
        </View>
       <View style={{width:'25%'}}>
       <Text style={styles.texttransaction}>{item.serviceName}</Text>
       </View>
        <View style={{width:'10%'}}>
        <Text style={[styles.texttransaction,{textAlign:'right',color: item.credit === 'Yes' ? 'green' : 'red' }]}>{item.commisionAmount}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.maincontainer}>
      {/* Wallet Data */}
      <View style={styles.balance}>
        <Text style={styles.text}>Current Balance</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {fontSize: 35, marginLeft: 45}]}>
            {balance}
          </Text>
          <TouchableOpacity style={{marginLeft: 45}} >
            <Foundation name="refresh" size={35} color="white" />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
          }} onPress={() => navigation.navigate('Recharge')}>
          <Text style={styles.text}>Recharge Wallet</Text>
        </TouchableOpacity> */}
      </View>

      <FlatList
        data={transaction}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Wallet;

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
  renderviewholder: {
    borderColor: 'gray',
    borderBottomWidth: 2,
    width: '95%',
    flexDirection: 'row',
    alignSelf:'center',
    marginTop:25,
    gap:5,
    justifyContent:'center'
  },
  texttransaction:{
    fontSize:16,
    fontWeight:'bold',
    // textAlign:'center'
  }
});
