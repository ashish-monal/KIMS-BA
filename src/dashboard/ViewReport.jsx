import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const ViewReport = () => {
  const ReportDetails = [
    {
      id: 1,
      date: '10-10-2023',
      nameofservice: 'Blood Test',
      amount: '520',
      commisionamount: '52',
    },
    {
      id: 2,
      date: '31-09-2023',
      nameofservice: 'Diabetes',
      amount: '1235',
      commisionamount: '1252',
    },
    {
      id: 3,
      date: '09-10-2023',
      nameofservice: 'HIV',
      amount: '5200',
      commisionamount: '520',
    },
    {
      id: 4,
      date: '08-10-2023',
      nameofservice: 'Anemia',
      amount: '250',
      commisionamount: '25',
    },
    {
      id: 5,
      date: '07-10-2023',
      nameofservice: 'Cancer',
      amount: '52000',
      commisionamount: '5002',
    },
    {
      id: 6,
      date: '06-10-2023',
      nameofservice: 'Coronary heart disease',
      amount: '520',
      commisionamount: '52',
    },
    {
      id: 7,
      date: '05-10-2023',
      nameofservice: 'MRI Scans',
      amount: '520',
      commisionamount: '52',
    },
    {
      id: 8,
      date: '04-10-2023',
      nameofservice: 'CT Scans',
      amount: '520',
      commisionamount: '52',
    },
    {
      id: 9,
      date: '03-10-2023',
      nameofservice: 'PET Scans',
      amount: '520',
      commisionamount: '52',
    },
    {
      id: 10,
      date: '02-10-2023',
      nameofservice: 'Blood Sugar test',
      amount: '520',
      commisionamount: '52',
    },
    {
      id: 11,
      date: '01-10-2023',
      nameofservice: 'white blood cells',
      amount: '520',
      commisionamount: '52',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.renderviewholder}>
        <Text style={styles.texttransaction}>Date : {item.date}</Text>
        <Text style={styles.texttransaction}>Service : {item.nameofservice}</Text>
        <Text style={styles.texttransaction}>Amount : {item.amount}</Text>
        <Text style={styles.texttransaction}>Points Earned :  {item.commisionamount}</Text>
        
      </View>
    );
  };
  return (
    <View style={styles.maincontainer}>
        <View style={{marginBottom:15}}> 
      <FlatList
        data={ReportDetails}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
       </View>
    </View>
  );
};

export default ViewReport;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  viewholder:{
    borderWidth:2,
    borderColor:'red',
    width:'80%',
    elevation:5,
    flexDirection:'row',
    alignSelf:'center',
    backgroundColor:'white',
    padding:10,
  },
  renderviewholder: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius:10,
    width: '95%',
    flexDirection: 'column',
    alignSelf:'center',
    marginTop:25,
    gap:5,
    elevation:10,
    backgroundColor:'white',
    padding:10,
   
  },
  texttransaction:{
    fontSize:16,
    fontWeight:'bold',
    // textAlign:'center'
  }
});
