import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useWalletsStore } from '../../store/walletsStore';

export default function WalletsScreen() {
  const { wallets, addWallet, addAddress } = useWalletsStore();
  const [newWalletName, setNewWalletName] = useState('');
  const [selectedWalletId, setSelectedWalletId] = useState<string | null>(null);
  const [newAddress, setNewAddress] = useState('');

  const handleAddWallet = () => {
    if (newWalletName.trim()) {
      addWallet(newWalletName.trim());
      setNewWalletName('');
    }
  };

  return (
    <View className="flex-1 bg-zinc-950 p-4">
      <Text className="text-2xl font-bold text-white mb-4">My Wallets</Text>
      
      {/* Add new wallet */}
      <View className="bg-zinc-900 p-4 rounded-2xl mb-6">
        <TextInput
          className="bg-zinc-800 text-white p-3 rounded-xl"
          placeholder="Wallet name (e.g. My Exodus)" 
          placeholderTextColor="#888"
          value={newWalletName}
          onChangeText={setNewWalletName}
        />
        <TouchableOpacity onPress={handleAddWallet} className="bg-emerald-600 p-3 rounded-xl mt-3">
          <Text className="text-white text-center font-semibold">Create Wallet</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={wallets}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View className="bg-zinc-900 p-4 rounded-2xl mb-3">
            <Text className="text-white text-lg font-medium">{item.name}</Text>
            <Text className="text-zinc-400 text-sm">{item.addresses.length} addresses</Text>
            {/* Add address button */}
            <TouchableOpacity onPress={() => {/* open address modal */}} className="mt-2">
              <Text className="text-emerald-500">+ Add Address</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
