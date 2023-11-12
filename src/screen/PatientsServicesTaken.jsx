import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PatientsServicesTaken = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item, 'Line 6');
  const listOfServices = [
    {
      id: 1,
      date: '10-10-2023',
      amount: '200',
      servicetaken: 'Blood Test',
      serviceprovider: 'Dr abc',
      commisionamount: '20',
    },
    {
      id: 2,
      date: '05-10-2023',
      amount: '300',
      servicetaken: 'Mno Test',
      serviceprovider: 'Dr xyz',
      commisionamount: '30',
    },
    {
      id: 3,
      date: '06-10-2023',
      amount: '400',
      servicetaken: 'Jkl Test',
      serviceprovider: 'Dr Lal',
      commisionamount: '40',
    },
    {
      id: 4,
      date: '07-10-2023',
      amount: '500',
      servicetaken: 'Ghi Test',
      serviceprovider: 'Dr India',
      commisionamount: '50',
    },
    {
      id: 5,
      date: '08-10-2023',
      amount: '600',
      servicetaken: 'Def Test',
      serviceprovider: 'Dr Shakib',
      commisionamount: '60',
    },
    {
      id: 6,
      date: '09-10-2023',
      amount: '700',
      servicetaken: 'abc Test',
      serviceprovider: 'Dr Anubha',
      commisionamount: '20',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          gap: 5,
          borderColor: 'green',
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <Text style={styles.renderText}>Date - {item.date}</Text>
        <Text style={styles.renderText}>
          Name of Service - {item.servicetaken}
        </Text>
        <Text style={styles.renderText}>
          Name of Doctor - {item.serviceprovider}
        </Text>
        <Text style={styles.renderText}>Amount - {item.amount}</Text>
        <Text style={styles.renderText}>
          Points Earned - {item.commisionamount}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.maincontainer}>
      <View style={{marginVertical: 15, padding: 15, gap: 10, width: '90%'}}>
        <Text style={styles.text}>Name - {item.name}</Text>
        <Text style={styles.text}>Address - {item.address}</Text>
        <Text style={styles.text}>Gender - {item.sex}</Text>
        <Text style={styles.text}>Date of Birth - {item.dob}</Text>
      </View>

      <View
        style={{
         marginBottom:20,
          width: '90%',
          padding: 15,
          gap: 10,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            alignItems: 'center',
          }}>
          List of Service Taken by {item.name}
        </Text>

        <FlatList
          data={listOfServices}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default PatientsServicesTaken;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    // justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  renderText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
  },
});
