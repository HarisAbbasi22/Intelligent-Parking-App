import React, { Component } from 'react';
import { Button, Image, Text, TouchableOpacity,  View, StyleSheet,  SafeAreaView,
  StatusBar } from 'react-native';
  import CButton from './CButton';

 class ParkingSlots extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstFloor: '',
      secondFloor: '',
      thirdFloor: '',
   
    };
  }
  
  onSlot() {
    const { firstFloor, secondFloor, thirdFloor} = this.state;
    this.props.navigation.navigate('ParkingEnded')
  }

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.titleText}>Parking Slots</Text>
       <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
          <CButton text={"First Floor"}/>
          <CButton text={"Second Floor"}/>
          <CButton text={"Third Floor"}/>
        </View>
      </SafeAreaView>
        
       
       <Image
        style= {{width:360, height:400}}
        source = {require('./assets/slot.png')}
        />

<TouchableOpacity
          style={styles.button}
          onPress={this.onSlot.bind(this)}
       >
         <Text style={styles.buttonText}>Proceed to Park</Text>
       </TouchableOpacity>

      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  
  titleText:{
   
    fontWeight: "bold",
    marginBottom: 10,
    marginTop:20,
    fontSize: 25,

 
  },
  
 
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:"space-evenly",
    
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#FFD428',
    width: 327,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 20,

  },
  buttonText:{
 
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ParkingSlots;