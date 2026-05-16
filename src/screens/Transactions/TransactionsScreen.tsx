import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTransactionsStore } from '../../store/transactionsStore';

export default function TransactionsScreen() {
  const transactions = useTransactionsStore((state) => state.transactions);

  return (
    <View className="flex-1 bg-zinc-950 p-4">
      <Text className="text-2xl font-bold text-white mb-6">Transactions &amp; Lots</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View className="bg-zinc-900 p-4 rounded-2xl mb-3">
            <Text className="text-white">{item.type} {item.amount} {item.asset}</Text>
            <Text className="text-zinc-400 text-sm">Lot: {item.lotId || 'Unmatched'}</Text>
            {item.needsReview && <Text className="text-amber-500">Needs Manual Matching</Text>}
          </View>
        )}
      />
    </View>
  );
}
