import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, Image, TouchableOpacity,  View, StyleSheet } from 'react-native';

class AddCreditCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cardHolderName: '',
      cardNumber: '',
      expiryDate:'',
      cvv:'',
    };
  }
  
  onSaveCardDetails() {
    const { cardHolderName, cardNumber, expiryDate, cvv } = this.state;

    Alert.alert('Credentials', `${cardHolderName} + ${cardNumber} + ${expiryDate} + ${cvv}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        style= {{width:400, height:180}}
        source = {require('./assets/credit-card.png')}
        />

        
       <Text style={styles.titleText}>Add Credit Card</Text>
       <Text style={styles.smalltitleText}>Add your credit card information</Text>
  
        <TextInput
          value={this.state.cardHolderName}
          onChangeText={(cardHolderName) => this.setState({ cardHolderName })}
          placeholder={'Card Holder Name'}
          secureTextEntry={true}
          style={styles.input}
        />
         <TextInput
          value={this.state.cardNumber}
          onChangeText={(cardNumber) => this.setState({ cardNumber })}
          placeholder={'Card Number'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.expiryDate}
          onChangeText={(expiryDate) => this.setState({ expiryDate })}
          placeholder={'Expiry Date'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.cvv}
          onChangeText={(cvv) => this.setState({ cvv })}
          placeholder={'CVV'}
          secureTextEntry={true}
          style={styles.input}
        /> 
        
        <TouchableOpacity
          style={styles.button}
          onPress={this.onSaveCardDetails.bind(this)}
       >
         <Text style={styles.buttonText}>Save Card Details</Text>
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
    backgroundColor: '#E5E5E5',
  },
  input: {
    width: 327,
    height: 60,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  titleText:{
   
    marginRight:55,
    fontWeight: "bold",
    marginTop: 3,

  
  
  
    fontSize: 30,

  
  },
  smalltitleText:{
 
    marginBottom: 20,
    marginRight:100,
  

  
  },
  smallesttitleText:{

 
    marginRight:1,
  

  
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#FFD428',
    width: 327,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    marginTop: 1,
  },
  buttonText:{
  
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
export default AddCreditCard;