import { PropsWithChildren, useCallback } from 'react';
import React from 'react';
import * as Immer from 'immer';
import { useSharedValue } from 'react-native-reanimated';
import { SharedValueStoreContext } from '../utils/context';
import type { SharedValueStoreType } from '../types';

export function SharedValueStoreProvider<State, Actions>({
  children,
  store,
}: PropsWithChildren<{
  store: SharedValueStoreType<State, Actions>;
}>) {
  const sharedValue = useSharedValue<State>(store.initialState);

  const dispatcher = useCallback(
    (action: keyof Actions, payload: Actions[keyof Actions]) => {
      const nextState = Immer.produce(sharedValue.value, (draft) => {
        store.actions[action](draft, payload);
      });
      sharedValue.value = { ...nextState };
    },
    [sharedValue, store]
  );

  return (
    <SharedValueStoreContext.Provider
      value={{
        value: sharedValue,
        //@ts-ignore
        dispatcher,
      }}
    >
      {children}
    </SharedValueStoreContext.Provider>
  );
}
