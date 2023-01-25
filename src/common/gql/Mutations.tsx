import { gql } from '@apollo/client';

const Mutations = () => {
  const CREATE_FACTURA = gql`
    mutation CreateFactura($factura: FacturaDto!) {
      createFactura(factura: $factura) {
        id
        clienteNombre
        clienteCorreo
      }
    }
  `;
  return CREATE_FACTURA;
};

export default Mutations;
