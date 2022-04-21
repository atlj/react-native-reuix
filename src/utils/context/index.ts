import { createContext } from 'react';

export const SharedValueStoreContext =
  createContext<SharedValueStoreContextType>(null as any);
