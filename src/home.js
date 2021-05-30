import React, { Component} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';


class Home extends Component{
    render(){
        return (
            <View style={styles.container}>
              <Text style={styles.headText}>Welcome</Text>
              
              <Text style={styles.titleText}>Announcements:</Text>
              <TouchableOpacity
                 style={styles.firstbutton}
          
       >
          <Text style={styles.firstbuttonText}>20% discount on packages</Text>
       </TouchableOpacity>
       <TouchableOpacity
                 style={styles.firstbutton}
          
       >
          <Text style={styles.firstbuttonText}>Current rate per hour: $5</Text>
       </TouchableOpacity>

       <Text style={styles.simpleText}>Car in use:</Text>
       <Text style={styles.simpleText}>Proton Iriz PFQ 5218</Text>
       
       <Text style={styles.lastText}>Park you car now!</Text>
              
                <TouchableOpacity
                 style={styles.button}
          
          onPress={()=> this.props.navigation.navigate('ParkingSlots')}
       >
         <Text style={styles.buttonText}>Park Car</Text>
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
    button:{
        alignItems: 'center',
        backgroundColor: '#FFD428',
        width: 250,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 20,
    
      },
      firstbutton:{
        alignItems: 'center',
        backgroundColor: '#FF8900',
        width: 300,
        height: 60,
        padding: 5,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 10,
    
      },
      buttonText:{
     
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      titleText:{
      
       
        fontWeight: "bold",
        marginBottom:30,
     
    
      
      
      
        fontSize: 18,
    
      
      },
      lastText:{
       
       
        fontWeight: "bold",
        marginBottom:10,
        marginTop:60,
     
    
      
      
      
        fontSize: 20,
      },
      simpleText:{
   
       
        fontWeight: "bold",
        marginBottom:10,
        marginTop:10,
     
    
      
      
      
        fontSize: 20,
      },
          
    
      headText:{
      
        fontSize: 40,
        marginBottom:40,
       
      
    
      
      },
      firstText:{
       
        fontSize: 30,
        marginBottom:40,
       
      
    
      
      },
    });
export default Home;
