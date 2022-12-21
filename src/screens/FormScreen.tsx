import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import InputTextContainer from '../components/InputText';

const FormScreen = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  return (
    <View style={styles.container}>
      <InputTextContainer
        style={styles.textContainer}
        placeHolder="Nombre"
        handleOnChange={setNameInput}
        value={nameInput}
      />
      <InputTextContainer
        style={styles.textContainer}
        placeHolder="Correo"
        handleOnChange={setEmailInput}
        value={emailInput}
      />
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    marginVertical: 15,
  },
  button: {
    width: '100%',
    height: 48,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#1554f6',
    marginTop: 17,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    height: 48,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.87)',
  },
});
