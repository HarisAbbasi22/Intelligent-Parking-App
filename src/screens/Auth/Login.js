import React, { useState, useContext, useEffect } from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity,  View, StyleSheet } from 'react-native';
import { AuthContext} from '../../navigation/AuthProvider';
import ErrorMessage from '../../components/ErrorMessage';

const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [ errorMessage, setErrorMessage] =useState('')

  
  const { login } = useContext(AuthContext);

  const { errorMessage, setErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    setErrorMessage('')
  },[])

    return (
      <View style={styles.container}>
       <Text style={styles.titleText}>Welcome Back!</Text>
       <Text style={styles.smalltitleText}>Enter your email and password</Text>
  
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder={'Email'}
         
          style={styles.input}
        />
         <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        {errorMessage ?
            <>
              <ErrorMessage  message={errorMessage}/>
            </>
          :
            <></>
          }

        <TouchableOpacity
          style={styles.button}
          onPress={() => login(email, password)}
       >
         <Text style={styles.buttonText}> Login</Text>
       </TouchableOpacity>
       <Text onPress={() => props.navigation.navigate('SignUp')} style={styles.smallesttitleText}>Don't have an account? Sign Up</Text>
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

    marginRight:80,
    fontWeight: "bold",

  
  
  
    fontSize: 30,

  
  },
  smalltitleText:{
  
    marginBottom: 50,
    marginRight:110,
  

  
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

export default Login;