import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
const DoctorDetails = ({route,navigation}) => {
  const [date, setDate] = useState(new Date());
  const [time,setTime] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const {item} = route.params;

  const hospitalNameDetails = [
    {
      id: 1,
      hospitalname: 'Ford Hospita',
      timeslot: [
        {
          id: 1,
          time: '10 - 11 am ',
        },
        {
          id: 2,
          time: '11 - 12 pm ',
        },
        {
          id: 3,
          time: '12 - 01 pm ',
        },
        {
          id: 4,
          time: '01 - 02 pm ',
        },
      ],
    },
    {
      id: 2,
      hospitalname: 'Narayan Hospita',
      timeslot: [
        {
          id: 1,
          time: '10 - 11 am ',
        },
        {
          id: 2,
          time: '11 - 12 pm ',
        },
        {
          id: 3,
          time: '12 - 01 pm ',
        },
        {
          id: 4,
          time: '01 - 02 pm ',
        },
      ],
    },
    {
      id: 3,
      hospitalname: 'Big B Hospital',
      timeslot: [
        {
          id: 1,
          time: '10 - 11 am ',
        },
        {
          id: 2,
          time: '11 - 12 pm ',
        },
        {
          id: 3,
          time: '12 - 01 pm ',
        },
        {
          id: 4,
          time: '01 - 02 pm ',
        },
      ],
    },
  ];
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

  const renderItem = ({item}) => {
    return (
      <View style={styles.viewHolder}>
        <Text style={styles.text}>{item.hospitalname}</Text>
        
        <View style={{flexDirection:'row', padding: 10, marginTop: 10 ,gap:25,flexWrap:'wrap'}}>
        {item.timeslot.map((timeSlot) => (
            <TouchableOpacity onPress={()=> navigation.navigate('Booking Details',{timeSlot})} key={timeSlot.id} style={{backgroundColor:'green',borderColor:'green',borderWidth:1,borderRadius:10,padding:10}} >
          <Text style={{color:'white',fontSize:14}}>{timeSlot.time}</Text>
          </TouchableOpacity>
        ))}
      </View>
       
      </View>
    );
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.containerholder}>
        <Text style={styles.text}>Doctor Details</Text>
      </View>

      <View style={{flexDirection: 'row', borderBottomWidth: 2}}>
        <View
          style={{
            width: '35%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/doc.png')}
            resizeMode="contain"
            style={{height: 100, width: 75}}
          />
        </View>
        <View>
          <Text style={styles.text}>Name - {item.doctorname}</Text>
          <Text style={styles.text}>Specialist - {item.doctortitle}</Text>
          <Text style={styles.text}>Fee - {item.doctorfee}</Text>
          <Text style={styles.text}>Hospital - {item.doctorhospital}</Text>
        </View>
      </View>

      <View style={styles.dateholder}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <View style={styles.inputholder}>
            <TextInput
              label={'Choose Date'} // Display the formatted date as the label
              style={styles.textinput}
              editable={false}
              mode="outlined"
              left={<TextInput.Icon icon="calendar" />}
              value={formateDate(date)}
              onChangeText={text => setDate(text)}
            />
          </View>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      <FlatList
        data={hospitalNameDetails}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  text: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '700',
  },
  containerholder: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dateholder: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 15,
    padding: 10,
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
  viewHolder: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    gap: 10,
    marginTop: 10,
    marginBottom:15,
    width:'95%',
    alignSelf:'center',
    elevation:10,
    backgroundColor:'white'
  },
});
