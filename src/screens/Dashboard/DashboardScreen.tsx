import React from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

export default function DashboardScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // TODO: Fetch portfolio data
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  return (
    <ScrollView 
      className="flex-1 bg-zinc-950"
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View className="p-6">
        <Text className="text-3xl font-bold text-white">Portfolio Overview</Text>
        <Text className="text-zinc-400 mt-2">Total Value • Cost Basis • Unrealized P&amp;L</Text>
        {/* Portfolio cards, charts, etc. */}
        <View className="mt-8 bg-zinc-900 rounded-3xl p-6">
          <Text className="text-white text-lg">Coming soon: Live portfolio with lots tracking</Text>
        </View>
      </View>
    </ScrollView>
  );
}
