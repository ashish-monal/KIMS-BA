import { StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screen/Splash';
import Welcome from '../screen/Welcome';
import Registration from '../screen/Registration';
import Login from '../screen/Login';
import ForgetPassword from '../screen/ForgetPassword';
import DrawerNavigations from './DrawerNavigations';
import Recharge from '../screen/Recharge';
import DoctorCategory from '../screen/DoctorCategory';
import GeneralOnology from '../screen/GeneralOnology';
import DoctorDetails from '../screen/DoctorDetails';
import BookingDetails from '../screen/BookingDetails';
import Categories from '../dashboard/Categories';
import CustomDrawerContent from './CustomDrawerContent';
import Reshedule from '../screen/Reshedule';
import PatientsServicesTaken from '../screen/PatientsServicesTaken';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name ="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name ="Welcome" component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name ="Registration" component={Registration} />
        <Stack.Screen name ="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name = "ForgetPassword" component={ForgetPassword}/>
        <Stack.Screen name = "Recharge" component={Recharge}/>
        <Stack.Screen name = "Select Spaciality" component={DoctorCategory}/>
        <Stack.Screen name = "Select Doctor List" component={GeneralOnology}/>
        <Stack.Screen name = "Doctor Details" component={DoctorDetails}/>
        <Stack.Screen name='Booking Details' component={BookingDetails}/>
        <Stack.Screen name ="Categories" component={Categories}/>
        <Stack.Screen name ="CustomDrawer" component={CustomDrawerContent}/>
        <Stack.Screen name='Reschedule' component={Reshedule}/>
        <Stack.Screen name='Paitients History' component={PatientsServicesTaken}/>
        
        <Stack.Screen name="DrawerNavigaton" component={DrawerNavigations}   options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})