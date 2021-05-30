import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity,  View, StyleSheet } from 'react-native';

class Screen2 extends Component {
 
  


  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.firstText}>ONGOING</Text>
       <Text style={styles.titleText}>KL Tower Parking</Text>
       <Text style={styles.smalltitleText}>Parking Garage</Text>
       <Text style={styles.smallesttitleText}>Wed 19, May</Text>
       <Text style={styles.littletitleText}>8:00 am - 12:00 pm</Text>

       <Text style={styles.secondText}>COMPLETED</Text>
       <Text style={styles.titleText}>KL Tower Parking</Text>
       <Text style={styles.smalltitleText}>Parking Garage</Text>
       <Text style={styles.smallesttitleText}>Tue 18, May</Text>
       <Text style={styles.littletitleText}>1:00 pm - 5:00 pm</Text>
       
       <Text style={styles.secondText}>COMPLETED</Text>
       <Text style={styles.titleText}>KL Tower Parking</Text>
       <Text style={styles.smalltitleText}>Parking Garage</Text>
       <Text style={styles.smallesttitleText}>Mon 17, May</Text>
       <Text style={styles.littletitleText}>9:00 am - 5:00 pm</Text>
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
  firstText:{
    
    marginRight:225,
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 15,
    color: "orange",

  
  },
  secondText:{

    marginRight:200,
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 15,
    color:"#0BC555",
    

  
  },
  
  titleText:{
   
    marginRight:130,
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 20,

  
  },
  smalltitleText:{
   
    marginBottom: 25,
    marginRight:210,
  

  
  },
  smallesttitleText:{
    
    marginBottom: 5,
    fontWeight: "bold",
 
  

  
  },
  littletitleText:{
    
    marginBottom: 50,
    fontWeight: "bold",
 
  

  
  },
  


});

export default Screen2;