import { useQuery } from '@apollo/client';
import Query from '../gql/Query';

const UseData = () => {
  const GET_FACTURAS = Query();
  const GetAllFacturas = () => {
    const { loading, error, data } = useQuery(GET_FACTURAS);
    return { loading, error, data };
  };
  return { GetAllFacturas };
};

export default UseData;
