import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

const DoctorCategory = ({navigation}) => {
  const [search, setSearch] = useState('');
  return (
    <ScrollView style={styles.maincontainer}>
      {/* Search box holder */}
      <View style={styles.searchboxholder}>
        <TextInput
          value={search}
          left={<TextInput.Icon icon="clipboard-search" />}
          onChangeText={text => setSearch(text)}
          label={'Search doctor specialties'}
          mode="outlined"
          style={{backgroundColor: 'white', borderRadius: 10}}
        />
      </View>
      {/* Category holder */}
      <View
        style={{
          alignSelf: 'center',
          width: '90%',
        }}>
        <View style={styles.view}>
          <View style={styles.view2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Select Doctor List')}>
              <Image
                source={require('../../assets/medi.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.text}>Medicine</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Select Doctor List')}>
              <Image
                source={require('../../assets/ono.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.text}>General Oncology</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Select Doctor List')}>
              <Image
                source={require('../../assets/medi.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.text}>Medicine</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Select Doctor List')}>
              <Image
                source={require('../../assets/ono.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.text}>General Oncology</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  categoryholder: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    gap: 25,
    marginVertical: 10,
  },
  imageholder: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
    padding: 5,
    borderColor: 'gray',
  },
  text: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
    fontWeight: '700',
  },
  image: {
    height: 150,
    width: 150,
  },
  searchboxholder: {
    width: '80%',
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
  view2: {
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    backgroundColor: 'white',
    borderRadius: 25,
    width: '45%',
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    alignSelf: 'center',
    marginVertical: '15%',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 30,
  },
});
