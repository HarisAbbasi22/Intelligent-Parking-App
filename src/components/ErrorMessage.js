import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default function ErrorMessage({ message, ...rest }) {
    return (
      <View>
        <Text style={styles.textStyle}>{message}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center', 
        color: 'white', 
        backgroundColor: 'red', 
        padding: 5, 
        borderRadius: 5, 
        marginTop: '4%'
    }
  });