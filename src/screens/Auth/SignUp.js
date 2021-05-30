import React, { useState, useContext, useEffect } from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity,  View, StyleSheet } from 'react-native';
import { AuthContext} from '../../navigation/AuthProvider';
import ErrorMessage from '../../components/ErrorMessage';

const SignUp = (props) => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')

  const { errorSignUp, setErrorSignUp } = useContext(AuthContext);

  useEffect(() => {
    setErrorSignUp('')
  },[])


  const { register } = useContext(AuthContext);


    return (
      <View style={styles.container}>
       <Text style={styles.titleText}>Get Started</Text>
       <Text style={styles.smalltitleText}>Let's create your account!</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder={'Name'}
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder={'Email'}
          keyboardType={'email-address'}
          style={styles.input}
        />
         <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
          {errorSignUp ?
            <>
              <ErrorMessage message={errorSignUp} />
            </>
          :
            <></>
          }
        <TouchableOpacity
          style={styles.button}
          onPress={() => register(email, password)}
       >
         <Text style={styles.buttonText}> Sign Up</Text>
       </TouchableOpacity>
       <Text onPress={() => props.navigation.navigate('Login')} style={styles.smallesttitleText}>Already have an account? Login</Text>
      </View>
    );
  
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

    marginRight:140,
    fontWeight: "bold",

  
  
  
    fontSize: 30,

  
  },
  smalltitleText:{
 
    marginBottom: 50,
    marginRight:145,
  

  
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

export default SignUp;
