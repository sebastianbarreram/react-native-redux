import React from 'react';
import { Provider } from 'react-redux';
import { ConfigStorage } from './src/redux/storage/ConfigStore';
import { MainScreen } from './src/screens/MainScreen';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import fetch from 'cross-fetch';

// Initialize Apollo Client
const localhost = '192.168.1.2';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: `http://${localhost}:3000/graphql `, fetch }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={ConfigStorage}>
        <MainScreen />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
