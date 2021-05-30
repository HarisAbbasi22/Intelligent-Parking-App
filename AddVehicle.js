import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, Image, TouchableOpacity,  View, StyleSheet } from 'react-native';

 class AddVehicle extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      licensePlateNumber: '',
      carModel: '',
    };
  }
  
  onAddVehicle() {
    const { licensePlateNumber, carModel } = this.state;

    Alert.alert('Credentials', `${licensePlateNumber} + ${carModel}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        style= {{width:400, height:300}}
        source = {require('./assets/add-vehicle.png')}
        />

        
       <Text style={styles.titleText}>Vehicle Details</Text>
       <Text style={styles.smalltitleText}>Add your vehicle details below</Text>
  
        <TextInput
          value={this.state.licensePlateNumber}
          onChangeText={(licensePlateNumber) => this.setState({ licensePlateNumber })}
          placeholder={'License Plate Number'}
          secureTextEntry={true}
          style={styles.input}
        />
         <TextInput
          value={this.state.carModel}
          onChangeText={(carModel) => this.setState({ carModel })}
          placeholder={'Car Model'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <TouchableOpacity
          style={styles.button}
          onPress={this.onAddVehicle.bind(this)}
       >
         <Text style={styles.buttonText}>Add Vehicle</Text>
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
    marginBottom: 20,
  },
  titleText:{

    marginRight:90,
    fontWeight: "bold",
    marginTop: 20,

  
  
  
    fontSize: 30,

  
  },
  smalltitleText:{

    marginBottom: 20,
    marginRight:120,
  

  
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
    marginBottom: 30,
  },
  buttonText:{

    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
export default AddVehicle;