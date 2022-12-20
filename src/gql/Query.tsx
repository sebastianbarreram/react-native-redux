import { gql } from '@apollo/client';

const Query = () => {
  const GET_FACTURAS = gql`
    query {
      data: getAllFacturas {
        id
        clienteNombre
        clienteCorreo
        detalleFactura {
          id
          precio
          producto
          cantidad
          total
          facturaId
        }
      }
    }
  `;
  return GET_FACTURAS;
};

export default Query;
