import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function TransactionCard({ transaction, onMatch }: any) {
  return (
    <View className="bg-zinc-900 p-4 rounded-2xl mb-3">
      <Text className="text-white font-medium">{transaction.type.toUpperCase()} {transaction.amount} {transaction.asset}</Text>
      {transaction.needsReview && (
        <TouchableOpacity onPress={() => onMatch(transaction)} className="mt-2 bg-amber-500 px-4 py-2 rounded-xl">
          <Text className="text-black">Link to Lot / Manual Match</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
