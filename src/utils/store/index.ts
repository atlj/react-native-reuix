import type { Draft } from 'immer';
import type { SharedValueStoreType } from 'src/types';

export function createSharedValueStore<State, Actions>({
  initialState,
  actions,
}: {
  initialState: State;
  actions: {
    [key in keyof Actions]: (
      state: Draft<State>,
      payload: Actions[key]
    ) => void;
  };
}): SharedValueStoreType<State, Actions> {
  return {
    initialState,
    actions,
  };
}
