import { useContext } from 'react';
import type {
  SharedValueStoreContextType,
  SharedValueStoreType,
} from 'src/types';
import { SharedValueStoreContext } from '../context';

export function useSharedValueDispatch<
  StoreType extends SharedValueStoreType
>() {
  const context = useContext<
    SharedValueStoreContextType<
      StoreType['initialState'],
      {
        [key in keyof StoreType['actions']]: Parameters<
          StoreType['actions'][key]
        >[1];
      }
    >
  >(SharedValueStoreContext);

  return context.dispatcher;
}

export function useSharedValueStore<StoreType extends SharedValueStoreType>() {
  const context = useContext<
    SharedValueStoreContextType<
      StoreType['initialState'],
      {
        [key in keyof StoreType['actions']]: Parameters<
          StoreType['actions'][key]
        >[1];
      }
    >
  >(SharedValueStoreContext);

  return context.value;
}
