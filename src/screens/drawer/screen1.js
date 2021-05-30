import React, {Component} from 'react';
import { Alert, Button, Text, TextInput, Image, TouchableOpacity,  View, StyleSheet } from 'react-native';



  class Screen1 extends Component {
  
      constructor(props) {
        super(props);
        
        this.state = {
          firstCar: '',
          secondCar: '',
         
        };
      }
      
      onCar() {
        const { firstCar, secondCar} = this.state;
    
      }
    
      render() {
        return (
          <View style={styles.container}>
           <Text style={styles.titleText}>Registered Vehicles</Text>
          
      
            
            
            <TouchableOpacity
              style={styles.button}
              onPress={this.onCar.bind(this)}
           >
             <Text style={styles.buttonText}>Premio WB-107</Text>
           </TouchableOpacity>
    
           <TouchableOpacity
              style={styles.buttonm}
              onPress={this.onCar.bind(this)}
           >
             <Text style={styles.buttonText}> Proton Iriz PFQ-5216</Text>
           </TouchableOpacity>

           <TouchableOpacity
          style={styles.buttonl}
          onPress={()=> this.props.navigation.navigate('AddVehicle')}
       >
         <Text style={styles.buttonText}>Add More Vehicle</Text>
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
        marginBottom: 50,
        fontSize: 25,
     
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
      buttonm: {
        alignItems: 'center',
        backgroundColor: 'white',
        width: 360,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 8,
        marginBottom: 250,
      },
      buttonText:{
     
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },

      buttonl:{
        alignItems: 'center',
        backgroundColor: '#FFD428',
        width: 250,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 8,
        marginBottom: 10,
    
      }
    });
    
export default Screen1;
