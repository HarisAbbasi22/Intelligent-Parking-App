import React, {Component} from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity,  View, StyleSheet } from 'react-native';





class Screen3 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      creditDebitCard: '',
      paypal: '',
      payoneer: '',
      jazzcash: '',
      easypaisa: '',

      

    };
  }
  
  onPayment() {
    const { creditDebitCard, paypal, payoneer, jazzcash, easypaisa } = this.state;

  }

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.titleText}>Choose Payment Method</Text>
       <Text style={styles.smalltitleText}>Add payment information </Text>
  
        
        
        <TouchableOpacity
          style={styles.button}
          onPress={()=> this.props.navigation.navigate('AddCreditCard')}
       >
         <Text style={styles.buttonText}>Credit / Debit Card</Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button}
          onPress={this.onPayment.bind(this)}
       >
         <Text style={styles.buttonText}> PayPal</Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button}
          onPress={this.onPayment.bind(this)}
       >
         <Text style={styles.buttonText}> Payoneer</Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button}
          onPress={this.onPayment.bind(this)}
       >
         <Text style={styles.buttonText}> JazzCash</Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button}
          onPress={this.onPayment.bind(this)}
       >
         <Text style={styles.buttonText}> Easypaisa</Text>
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
    backgroundColor: '#E5E5E5',
  },
  
  titleText:{

    
   
    fontWeight: "bold",

  
  
  
    fontSize: 25,

  
  },
  smalltitleText:{
   
    marginBottom: 50,
    marginRight:150,
  

  
  },
  smallesttitleText:{
   
 
    marginRight:1,
  

  
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 360,
    height: 50,
    padding: 10,
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

export default Screen3;

