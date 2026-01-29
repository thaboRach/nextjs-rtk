'use client';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useCallback, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';

import { makeStore } from '@/lib/store';

import type { AppStore } from '@/lib/store';
import type { ReactNode } from 'react';

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  // const storeRef = useRef<AppStore | null>(null);

  const storeRef = useCallback(() => {
    return makeStore();
  }, []);

  // if (!storeRef.current) {
  //   // Create the store instance the first time this renders
  //   storeRef.current = makeStore();
  // }

  useEffect(() => {
    if (storeRef != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef().dispatch);
      return unsubscribe;
    }
  }, [storeRef]);

  return <Provider store={storeRef()}>{children}</Provider>;
};
