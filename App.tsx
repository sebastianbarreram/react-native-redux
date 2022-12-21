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
const token =
  '99e4c497d8b4c049ce41e71ff04055adc01714bccdf2f901e4c1d16ffabcef571398fa2b416ddc1037a98c4040c2f277c1bbb2dbc647ed65a2acaf657ac229ec';
const localhost = '192.168.1.2';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `http://${localhost}:3000/graphql `,
    fetch,
    headers: {
      authorization: `Bearer ${token}`,
    },
  }),
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
