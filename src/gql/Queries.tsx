import { gql } from '@apollo/client';

const Queries = () => {
  const GET_FACTURAS = gql`
    query {
      data: getAllFacturas {
        id
        clienteNombre
        clienteCorreo
      }
    }
  `;
  return GET_FACTURAS;
};

export default Queries;
