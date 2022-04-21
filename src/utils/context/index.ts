import { createContext } from 'react';
import type { SharedValueStoreContextType } from '../../types';

export const SharedValueStoreContext =
  createContext<SharedValueStoreContextType>(null as any);
