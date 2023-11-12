import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

const BookingHistory = ({navigation}) => {
  const [cancle, setCancle] = useState(false);
  const [reschedule, setReschedule] = useState(false);
  const [reschudeldate, setReschudelDate] = useState('10-10-2023');
  const [showDate, setShowDate] = useState(false);

  const BookingDetails = [
    {
      id: 1,
      bookingdate: '10-10-2023',
      bookedfor: 'Rana Raj',
      bookeddatefor: '16-10-2023',
      amount: '300',
      bookedservice: 'General Check up ',
      bookedwithname: 'Dr.Shila Mehta',
    },
    {
      id: 2,
      bookingdate: '09-10-2023',
      bookedfor: 'Rahul Malhotra',
      bookeddatefor: '21-10-2023',
      amount: '500',
      bookedservice: 'Fever check',
      bookedwithname: 'Dr.Saurabh Shukla',
    },
    {
      id: 3,
      bookingdate: '08-10-2023',
      bookedfor: 'Vikash Kumar',
      bookeddatefor: '12-10-2023',
      amount: '400',
      bookedservice: 'Blood Report',
      bookedwithname: 'Dr. Nitish Kumar',
    },
    {
      id: 4,
      bookingdate: '07-10-2023',
      bookedfor: 'Naveen Kumar',
      bookeddatefor: '21-10-2023',
      amount: '700',
      bookedservice: 'Bone Fracture',
      bookedwithname: 'Dr. Ajay Kumar Jaswal',
    },
    {
      id: 5,
      bookingdate: '10-10-2023',
      bookedfor: 'Suraj',
      bookeddatefor: '27-10-2023',
      amount: '100',
      bookedservice: 'Blood Pressure Check',
      bookedwithname: 'Dr.Amit Kumar',
    },
    {
      id: 6,
      bookingdate: '11-10-2023',
      bookedfor: 'Mr. Shubham Mehta',
      bookeddatefor: '17-10-2023',
      amount: '450',
      bookedservice: 'Dengu',
      bookedwithname: 'Dr.Koshik Garg',
    },
    {
      id: 7,
      bookingdate: '04-10-2023',
      bookedfor: 'Ankit Kumar Singh',
      bookeddatefor: '19-10-2023',
      amount: '3000',
      bookedservice: 'Neuro Test',
      bookedwithname: 'Dr.Ashish Ranjan',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.renderviewholder}>
        <Text style={styles.texttransaction}>
          Date of Booking - {item.bookingdate}
        </Text>
        <Text style={styles.texttransaction}>
          Booked for - {item.bookedfor}
        </Text>
        <Text style={styles.texttransaction}>
          Service Date - {item.bookeddatefor}
        </Text>
        <Text style={styles.texttransaction}>
         Charge - {item.amount}
        </Text>
        <Text style={styles.texttransaction}>
          Service Name - {item.bookedservice}
        </Text>
        <Text style={styles.texttransaction}>
          Service Provider - {item.bookedwithname}
        </Text>
        <View style={styles.buttonholder}>
          <TouchableOpacity
            onPress={() => setCancle(true)}
            style={styles.button}>
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {width: '40%', backgroundColor: 'green', borderColor: 'green'},
            ]}
            onPress={() => navigation.navigate('Reschedule',{item})}>
            <Text style={styles.text}>Reschedule</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.maincontainer}>
      <FlatList
        data={BookingDetails}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={cancle}
        onRequestClose={() => {
          setCancle(false);
        }}>
        <TouchableWithoutFeedback onPress={() => setCancle(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TextInput
                label={'Enter the Cancel Reasons'}
                style={{backgroundColor: 'white'}}
              />
              <View style={styles.buttonholder}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setCancle(false)}>
                  <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={reschedule}
        onRequestClose={() => {
          setReschedule(false);
        }}>
        <TouchableWithoutFeedback onPress={() => setReschedule(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={{fontSize: 16}}>
                Enter the reschedule Time and Date
              </Text>
              <TouchableOpacity onPress={() => setShowDate(true)}>
                <TextInput
                  editable={true}
                  value={reschudeldate}
                  onChangeText={text => setReschudelDate(text)}
                  label={'Enter the reschedule Time and Date'}
                  style={{backgroundColor: 'white'}}
                />
              </TouchableOpacity>

              <View style={styles.buttonholder}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      width: '40%',
                      backgroundColor: 'green',
                      borderColor: 'green',
                    },
                  ]}
                  onPress={() => setReschedule(false)}>
                  <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
        </TouchableWithoutFeedback>
      </Modal> */}
    </View>
  );
};

export default BookingHistory;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  renderviewholder: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    width: '80%',
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: 25,
    gap: 5,
    elevation: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  texttransaction: {
    fontSize: 16,
    fontWeight: 'bold',
    // textAlign:'center'
  },
  buttonholder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'red',
    width: '30%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    elevation: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent gray background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    elevation: 10,
  },
});
