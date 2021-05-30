import React, {Component} from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity,  View, StyleSheet } from 'react-native';

class Packages extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      oneMonthPackage: '',
      threeMonthPackage: '',
      sixMonthPackage: '',
      twelveMonthPackage: '',
     

      

    };
  }
  
  onPackage() {
    const { oneMonthPackage, threeMonthPackage, sixMonthPackage, twelveMonthPackage } = this.state;
    this.props.navigation.navigate('Wallet')
  }

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.titleText}>Buy Parking Package</Text>
      
  
        
        
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPackage.bind(this)}
       >
         <Text style={styles.buttonText}>1 Month Package: $100</Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button}
          onPress={this.onPackage.bind(this)}
       >
         <Text style={styles.buttonText}>3 Months Package: $300</Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button}
          onPress={this.onPackage.bind(this)}
       >
         <Text style={styles.buttonText}>6 Months Package: $600</Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button}
          onPress={this.onPackage.bind(this)}
       >
         <Text style={styles.buttonText}> 1 Year Package: $1200</Text>
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
 
    marginBottom: 40,
   
    fontWeight: "bold",

  
  
  
    fontSize: 25,

  
  },
 
  

  button: {
    alignItems: 'center',
    backgroundColor: '#FFD428',
    width: 360,
    height: 70,
    padding: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    marginBottom: 30,
  },
  buttonText:{
 
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Packages;
