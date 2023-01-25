import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import InputTextContainer from '../components/InputText';
import Mutations from '../common/gql/Mutations';
import { useMutation } from '@apollo/client';
import Queries from '../common/gql/Queries';

const FormScreen = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const GET_FACTURAS = Queries();
  const CREATE_FACTURA = Mutations();
  const [createFactura, newFactura] = useMutation(CREATE_FACTURA, {
    refetchQueries: [GET_FACTURAS],
  });

  const handleCrear = () => {
    console.log('nameInput :>> ', nameInput);
    console.log('emailInput :>> ', emailInput);
    createFactura({
      variables: {
        factura: {
          clienteNombre: nameInput,
          clienteCorreo: emailInput,
        },
      },
    })
      .then(res => console.log('res', res))
      .catch(err => console.log('err', err.mes));
    console.log('data', newFactura.data);
    console.log('loading :>> ', newFactura.loading);
    console.log('error', newFactura.error?.graphQLErrors[0].extensions);
    setNameInput('');
    setEmailInput('');
  };

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
      <TouchableOpacity style={styles.button} onPress={() => handleCrear()}>
        <Text style={styles.buttonText}>Crear</Text>
      </TouchableOpacity>
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
