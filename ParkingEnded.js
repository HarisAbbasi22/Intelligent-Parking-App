import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity,  View, StyleSheet } from 'react-native';

 class ParkingEnded extends Component {
    constructor(props) {
        super(props);
        
      }
  

  render() {
    return (
      <View style={styles.container}>
      
       <Text style={styles.titleText}>Parking Ended</Text>
       <Text style={styles.smalltitleText}> KL Tower Parking Garage</Text>
       <Text style={styles.smallesttitleText}>Wed 19, May</Text>
       <Text style={styles.titleText}>Parking Duration</Text>
       <Text style={styles.smallesttitleText}> 4 Hours</Text>
       
       <Text style={styles.littletitleText}>8:00 am - 12:00 pm</Text>

       <Text style={styles.titleText}>Pay for Parking</Text>
       <TouchableOpacity
          style={styles.button}
            onPress={() => this.props.navigation.navigate('Wallet')}
       >
         <Text style={styles.buttonText}>Pay </Text>
       </TouchableOpacity>

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  
  
  titleText:{
  
    marginRight:100,
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 25,

  
  },
  smalltitleText:{
  
    marginBottom: 25,
    marginRight:120,
  

  
  },
  smallesttitleText:{
  
    marginBottom: 40,
    fontWeight: "bold",
    marginTop: 40,
    fontSize: 18,
 
  

  
  },
  littletitleText:{
  
    marginBottom: 50,
    fontWeight: "bold",
 
  

  
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFD428',
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    marginBottom: 30,
    marginTop:30,
  },
  buttonText:{
   
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  

});

export default ParkingEnded;
