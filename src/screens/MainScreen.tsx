import { View, Text, Button } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../redux/slices/MessageSlice';
import Factura from '../components/Factura';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const MainScreen = ({ navigation }: MyStackScreenProps) => {
  const dispatch = useDispatch();
  const { mensaje } = useSelector((state: any) => state.mensaje);

  const handlePress = () => {
    dispatch(setMessage('Mensaje desde el componente'));
  };
  const handlePress2 = () => {
    dispatch(setMessage('Otro Mensaje desde el componente'));
  };

  return (
    <View>
      <Text>{mensaje}</Text>
      <Button title={'Set Message'} onPress={handlePress} />
      <Button title={'Set Otro mensaje'} onPress={handlePress2} />
      {/* <Button title={'Reload'} onPress={() => dispatch(fetchUsers())} /> */}
      <Button title="Go to Form" onPress={() => navigation.navigate('Form')} />
      <Factura />
    </View>
  );
};
