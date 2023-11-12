import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const Reshedule = ({navigation, route}) => {
  const [rescheduleDate, setReschudelDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [checkingDate, setCheckingDate] = useState('');

  const avialableDateWiseSlot = [
    {
      id: 1,
      date: '14-10-2023',
      slot: [
        {
          id: 1,
          time: '10 - 11 am',
        },
        {
          id: 2,
          time: '11-12 pm ',
        },
        {
          id: 3,
          time: '12 - 01 pm',
        },
        {
          id: 4,
          time: '01 - 02 pm ',
        },
        {
          id: 5,
          time: '02 - 03 pm',
        },
        {
          id: 6,
          time: '03 -04 pm',
        },
      ],
    },
  ];

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setReschudelDate(selectedDate);
      setCheckingDate(selectedDate);
    }
  };

  const formateDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  const handlesubmit = () => {
  
    Alert.alert(
      'Confirmation',
      'Are you sure you want to reschedule the previous booking above the selected Date?',
      [
        {
          text: 'Cancel',
          onPress: () => {
           Alert.alert("Error","Booking is not reschedule")
           navigation.goBack();
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            Alert.alert("Sucess","Booking is reschedule")
            // Navigate to screen A here
            navigation.goBack(); // Replace 'ScreenA' with the actual screen name
          },
        },
      ],
    );
  };
  const {item} = route.params;
  console.log(item, 'Line 26');
  return (
    <ScrollView style={styles.maincontainer}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            marginBottom: 10,
            marginTop: 5,
          }}>
          Find the details of report
        </Text>
        <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
          <Text style={{color: 'black'}}>Name : </Text>
          {item.bookedfor}
        </Text>
        <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
          <Text style={{color: 'black'}}>Booked For : </Text>
          {item.bookedservice}
        </Text>
        <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
          <Text style={{color: 'black'}}>Doctor Name : </Text>
          {item.bookedwithname}
        </Text>
        <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
          <Text style={{color: 'black'}}>Consultancy Date : </Text>
          {item.bookeddatefor}
        </Text>
        <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
          <Text style={{color: 'black'}}>Booking Amount : </Text>
          {item.amount}
        </Text>

        <View
          style={{
            width: '80%',
            marginTop: 15,
          }}>
          {/* Date Holder */}
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              editable={false}
              value={formateDate(rescheduleDate)}
              onChangeText={text => setReschudelDate(text)}
              label={'Choose Reschedule Date'}
              mode="outlined"
              left={<TextInput.Icon icon="calendar" />}
            />
            {showDatePicker && (
              <DateTimePicker
                value={rescheduleDate}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {checkingDate != null && (
        <View
          style={{
            gap: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 15,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          {avialableDateWiseSlot[0].slot.map(timeSlot => (
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
              }}
              onPress={handlesubmit}
              key={timeSlot.id}>
              <Text style={{color: 'white', fontSize: 14}}>
                {timeSlot.time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Reshedule;

const styles = StyleSheet.create({});
