import { Draft } from 'immer';
import type { SharedValue } from 'react-native-reanimated';

export type SharedValueStoreContextType<State = any, Actions = any> = {
  value: SharedValue<State>;
  dispatcher: (action: keyof Actions, payload: Actions[keyof Actions]) => void;
};

export type SharedValueStoreType<State = any, Actions = any> = {
  initialState: State;
  actions: {
    [key in keyof Actions]: (
      state: Draft<State>,
      payload: Actions[key]
    ) => void;
  };
};
