import { useMutation, useQuery } from '@apollo/client';
import Queries from '../common/gql/Queries';
import Mutations from '../common/gql/Mutations';

const UseData = () => {
  const GET_FACTURAS = Queries();
  const CREATE_FACTURA = Mutations();

  const GetAllFacturas = () => {
    const { loading, error, data } = useQuery(GET_FACTURAS);
    return { loading, error, data };
  };

  const CreateFactura = () => {
    const [createFactura, { data, loading, error }] =
      useMutation(CREATE_FACTURA);
    return [createFactura, { data, loading, error }];
  };

  return { GetAllFacturas, CreateFactura };
};

export default UseData;
