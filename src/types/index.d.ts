import { Draft } from 'immer';

declare global {
  type SharedValueStoreContextType<State = any, Actions = any> = {
    value: SharedValue<State>;
    dispatcher: (
      action: keyof Actions,
      payload: Actions[keyof Actions]
    ) => void;
  };

  type SharedValueStoreType<State, Actions> = {
    initialState: State;
    actions: {
      [key in keyof Actions]: (
        state: Draft<State>,
        payload: Actions[key]
      ) => void;
    };
  };
}
