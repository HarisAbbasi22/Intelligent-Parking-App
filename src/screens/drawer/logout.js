import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AuthContext} from '../../navigation/AuthProvider';


const Logout = () => {

    const { logout } = useContext(AuthContext);

    return(
        <View style={styles.container}>       
            <TouchableOpacity
                style={styles.button}
                onPress={() => logout()}
            >
            <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent: 'center',
      backgroundColor: '#E5E5E5',
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
    
      },
      buttonText:{
  
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

export default Logout;
