import React from 'react';
import { Routing } from './Route';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/app/models/store';

const App = () => (
  <div style={{
    backgroundColor: '#ccc',
    padding: 0,
    margin: 0,
    flex: 1
  }}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routing />
      </PersistGate>
    </Provider>
  </div>
);

export default App;
