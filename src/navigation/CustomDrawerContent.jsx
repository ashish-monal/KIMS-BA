import React from 'react';
import {View, Text, Image, Button, Alert, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawerContent = props => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    profileImage:
      'https://icon2.cleanpng.com/20180523/wxj/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc2ee812.2252011515270566041921.jpg',
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: () => {
          // Implement your logout logic here
          // For example, navigate to the login screen or clear the user's session
          props.navigation.navigate('Login'); // Navigate to the login screen
        },
      },
    ]);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{uri: user.profileImage}}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>

        {/* Drawer Items (your existing navigation links) */}
        <DrawerItemList {...props} />

        {/* Logout Button */}
        <View
          style={{
            position: 'relative',
            backgroundColor: 'white',
            width: '100%',
            paddingLeft: 5,
          }}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={{fontSize: 16, padding: 10, fontWeight: '600'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
