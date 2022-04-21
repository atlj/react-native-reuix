import { createContext } from 'react';
import type { SharedValueStoreContextType } from 'src/types';

export const SharedValueStoreContext =
  createContext<SharedValueStoreContextType>(null as any);
