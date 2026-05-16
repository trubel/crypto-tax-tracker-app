import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function TaxReportScreen() {
  return (
    <ScrollView className="flex-1 bg-zinc-950 p-4">
      <Text className="text-3xl font-bold text-white mb-6">Tax Report</Text>
      <View className="bg-zinc-900 rounded-3xl p-6 mb-6">
        <Text className="text-white text-xl">2025 Capital Gains</Text>
        <Text className="text-emerald-400 text-4xl font-bold mt-2">$1,245.67</Text>
      </View>
      <TouchableOpacity className="bg-white p-4 rounded-2xl">
        <Text className="text-black font-semibold text-center">Generate Full Report (CSV/PDF)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
