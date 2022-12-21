import React from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import UseData from '../hooks/UseData';
import { FacturaDto } from '../common/dtos/FacturaDto';
import TableRow from './TableRow';

const Factura = () => {
  const { GetAllFacturas } = UseData();
  const { loading, error, data } = GetAllFacturas();
  console.log('loading', loading);
  console.log('error', error);
  console.log('data :>> ', data);
  // let counter = 0;

  const renderTransactions = ({
    item,
    index,
  }: ListRenderItemInfo<FacturaDto>) => {
    return (
      <TableRow
        id={item.id}
        name={item.clienteNombre}
        email={item.clienteCorreo}
        color="black"
        counter={index}
        key={item.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TableRow
        id="Id"
        name="Nombre del cliente"
        email="Correo del cliente"
        color="green"
      />
      {loading && (
        <React.Fragment>
          <ActivityIndicator size="large" />
        </React.Fragment>
      )}
      {data !== undefined && (
        // data.data.map((factura: FacturaDto) => {
        //   counter = counter + 1;
        //   return (
        //     <TableRow
        //       id={factura.id}
        //       name={factura.clienteNombre}
        //       email={factura.clienteCorreo}
        //       color="black"
        //       counter={counter}
        //       key={factura.id}
        //     />
        //   );
        // })
        <View style={styles.containerFacturas}>
          <FlatList
            data={data.data}
            renderItem={renderTransactions}
            keyExtractor={factura => String(factura.id)}
          />
        </View>
      )}
    </View>
  );
};

export default Factura;

const styles = StyleSheet.create({
  container: {
    height: '77%',
    backgroundColor: 'white',
  },
  balanceText: {
    marginLeft: 55,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.74)',
  },
  containerFacturas: {
    flex: 1,
    backgroundColor: 'white',
  },
});
