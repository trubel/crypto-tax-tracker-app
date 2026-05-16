import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Wallet } from '../types';

type WalletsState = {
  wallets: Wallet[];
  addWallet: (name: string) => void;
  addAddress: (walletId: string, address: string, platform?: string) => void;
};

export const useWalletsStore = create<WalletsState>()(
  persist(
    (set) => ({
      wallets: [],
      addWallet: (name) => set((state) => ({
        wallets: [...state.wallets, {
          id: Date.now().toString(),
          name,
          addresses: []
        }]
      })),
      addAddress: (walletId, address, platform) => set((state) => ({
        wallets: state.wallets.map(w => 
          w.id === walletId 
            ? { ...w, addresses: [...w.addresses, { address, platform: platform || 'self-custody' }] }
            : w
        )
      }))
    }),
    { name: 'wallets-storage' }
  )
);
