import { Draft } from 'immer';
import type { SharedValue } from 'react-native-reanimated';

declare global {
  type SharedValueStoreContextType<State = any, Actions = any> = {
    value: SharedValue<State>;
    dispatcher: (
      action: keyof Actions,
      payload: Actions[keyof Actions]
    ) => void;
  };

  type SharedValueStoreType<State = any, Actions = any> = {
    initialState: State;
    actions: {
      [key in keyof Actions]: (
        state: Draft<State>,
        payload: Actions[key]
      ) => void;
    };
  };
}
