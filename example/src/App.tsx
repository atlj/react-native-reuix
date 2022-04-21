import * as React from 'react';

import { SharedValueStoreProvider } from 'react-native-reuix';
import { sharedValueStore } from './Store';
import TestView from './Views';

export default function App() {
  return (
    <SharedValueStoreProvider store={sharedValueStore}>
      <TestView />
    </SharedValueStoreProvider>
  );
}
