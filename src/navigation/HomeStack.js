import React, { Component } from 'react';
import { render } from 'react-dom';

import Home from '.././home';


import Screen1 from '../screens/drawer/screen1';
import Screen2 from '../screens/drawer/screen2';
import Screen3 from '../screens/drawer/screen3';
import Support from '../screens/drawer/support';
import Settings from '../screens/drawer/settings';
import Logout from '../screens/drawer/logout';

// import Tab1 from './src/screens/tabs/Tab1';
// import Tab2 from './src/screens/tabs/Tab2';
// import Tab3 from './src/screens/tabs/Tab3';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AddVehicle from '../../AddVehicle';
import AddCreditCard from '../../AddCreditCard';
import ParkingSlots from '../../ParkingSlots';
import ParkingEnded from '../../ParkingEnded';
import Wallet from '../../Wallet';
import Packages from '../../Packages';






const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();


export default class App extends Component {

  createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ParkingSlots" component={ParkingSlots} />
      <Stack.Screen name="ParkingEnded" component={ParkingEnded} />
      <Stack.Screen name="Packages" component={Packages} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="AddCreditCard" component={AddCreditCard} />
    </Stack.Navigator>
  createVehicleStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Registered Vehicles" component={Screen1} />
      <Stack.Screen name="AddVehicle" component={AddVehicle} />

    </Stack.Navigator>

  createWalletStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Wallet" component={Screen3} />
      <Stack.Screen name="AddCreditCard" component={AddCreditCard} />

    </Stack.Navigator>
  createPackagesStack = () =>
    <Stack.Navigator>
    

    </Stack.Navigator>

 

  render() {

    return (
    
        <Drawer.Navigator>


          <Drawer.Screen name="Home" children={this.createHomeStack} />
          <Drawer.Screen name="Vehicle" children={this.createVehicleStack} />
          <Drawer.Screen name="Parking History" component={Screen2} />
          <Drawer.Screen name="Wallet" component={this.createWalletStack} />
          <Drawer.Screen name="Packages" component={Packages} />
          <Drawer.Screen name = "Support" component = {Support}/>
          <Drawer.Screen name = "Settings" component = {Settings}/>
         <Drawer.Screen name = "Logout" component = {Logout}/> 


        </Drawer.Navigator>
 
    );
  }
}