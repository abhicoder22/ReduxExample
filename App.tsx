import React from 'react';
import HomeScreen from './src/screens/Home';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
