export interface Address {
  address: string;
  platform?: 'coinbase' | 'uphold' | 'xaman' | 'self-custody';
}

export interface Wallet {
  id: string;
  name: string;
  addresses: Address[];
}

export interface Lot {
  id: string;
  asset: string;
  amount: number;
  costBasis: number;
  purchaseDate: string;
  remaining: number;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell' | 'transfer';
  asset: string;
  amount: number;
  price?: number;
  date: string;
  lotId?: string;
  needsReview?: boolean;
  fromWallet?: string;
  toWallet?: string;
}
