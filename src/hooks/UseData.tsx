import { useQuery } from '@apollo/client';
import Queries from '../common/gql/Queries';

const UseData = () => {
  const GET_FACTURAS = Queries();
  const GetAllFacturas = () => {
    const { loading, error, data } = useQuery(GET_FACTURAS);
    return { loading, error, data };
  };
  return { GetAllFacturas };
};

export default UseData;
