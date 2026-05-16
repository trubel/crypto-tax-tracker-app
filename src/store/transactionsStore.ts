import { create } from 'zustand';
import { Transaction } from '../types';

type TransactionsState = {
  transactions: Transaction[];
  addTransaction: (tx: Omit<Transaction, 'id'>) => void;
};

export const useTransactionsStore = create<TransactionsState>()((set) => ({
  transactions: [],
  addTransaction: (tx) => set((state) => ({
    transactions: [...state.transactions, { ...tx, id: Date.now().toString() }]
  }))
}));
