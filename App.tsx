import React from 'react';
import { Provider } from 'react-redux';
import { ConfigStorage } from './src/redux/storage/ConfigStore';
import { MainScreen } from './src/screens/MainScreen';

const App = () => {
  return (
    <Provider store={ConfigStorage}>
      <MainScreen />
    </Provider>
  );
};

export default App;
