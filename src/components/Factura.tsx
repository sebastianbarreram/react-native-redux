import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import UseData from '../hooks/UseData';
import { FacturaGetDto } from '../common/dtos/FacturaGetDto';
import TableRow from './TableRow';

const Factura = () => {
  const { GetAllFacturas } = UseData();
  const { loading, error, data } = GetAllFacturas();
  console.log('loading', loading);
  console.log('error', error);
  console.log('data :>> ', data);
  let counter = 0;

  return (
    <View>
      <TableRow
        id="Id"
        name="Nombre del cliente"
        email="Correo del cliente"
        color="green"
      />
      {loading && (
        <React.Fragment>
          <ActivityIndicator size="large" />
          <View>
            <Text>Please wait...</Text>
          </View>
        </React.Fragment>
      )}
      {data !== undefined &&
        data.data.map((factura: FacturaGetDto) => {
          counter = counter + 1;
          return (
            <TableRow
              id={factura.id}
              name={factura.clienteNombre}
              email={factura.clienteCorreo}
              color="black"
              counter={counter}
              key={factura.id}
            />
          );
        })}
    </View>
  );
};

export default Factura;
