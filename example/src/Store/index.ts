import { createSharedValueStore } from 'react-native-reuix';

export const sharedValueStore = createSharedValueStore({
  initialState: {
    testOpacity: 0.5,
  },
  actions: {
    setTestOpacity(state, payload: number) {
      state.testOpacity = payload;
    },
    toggleTestOpacity(state) {
      state.testOpacity = state.testOpacity === 0.5 ? 1 : 0.5;
    },
  },
});

export type TestStoreType = typeof sharedValueStore;
