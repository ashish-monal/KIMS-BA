import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../dashboard/Profile';
import AddFamilyMember from '../dashboard/AddFamilyMember';
import BookingService from '../dashboard/BookingService';
import Wallet from '../dashboard/Wallet';
import MemberList from '../dashboard/MemberList';
import Refer from '../dashboard/Refer';
import Withdrawal from '../dashboard/Withdrawal';
import ViewReport from '../dashboard/ViewReport';
import BookingHistory from '../dashboard/BookingHistory';
import Categories from '../dashboard/Categories';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigations = () => {
  return (
    <Drawer.Navigator initialRouteName='Services' drawerContent={(props) => <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name='Profile' component={Profile}/>
        <Drawer.Screen name ="Services" component={Categories} />
        <Drawer.Screen name='Add Patients' component={AddFamilyMember}/>
        {/* <Drawer.Screen name='Bookings' component={BookingService}/> */}
        <Drawer.Screen name='Booking History' component={BookingHistory}/>
        <Drawer.Screen name='Wallet' component={Wallet}/>
        <Drawer.Screen name='Reedem' component={Withdrawal}/>
        <Drawer.Screen name='Patients List' component={MemberList}/>
        <Drawer.Screen name='View Point Report' component={ViewReport}/>
        <Drawer.Screen name='Refer' component={Refer}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigations

const styles = StyleSheet.create({})