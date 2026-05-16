# Crypto Tax Tracker - Mobile App

## Overview
React Native (Expo) mobile frontend for self-hosted crypto tax tracking.

## Features
- Secure backend URL configuration
- Dashboard with portfolio overview
- Wallet management
- Transaction import & categorization
- Tax report generation (capital gains, etc.)
- Settings with server connection test

## Tech Stack
- React Native + Expo
- TypeScript
- NativeWind (Tailwind)
- React Navigation
- Zustand
- Axios
- expo-secure-store

## Setup
1. `npm install`
2. `npx expo start`

First launch will prompt for your self-hosted backend URL (e.g. `https://mytracker.example.com`).

### Linux Setup
Yes, the app can be fully developed on Linux.

#### Quick Setup on Linux:

1. Install Node.js (v20+ recommended)
2. Install Java for Android:
   ```bash
   sudo apt update
   sudo apt install openjdk-17-jdk
   ```
3. Clone & run:
   ```bash
   git clone https://github.com/trubel/crypto-tax-tracker-app.git
   cd crypto-tax-tracker-app
   npm install
   npx expo start
   ```

Press `a` to launch Android emulator or scan QR code with Expo Go on Android.

**Note:** iOS development requires macOS.

## Backend
Requires a compatible self-hosted backend API with `/health` endpoint.

## Development
- Server config stored securely
- Ready for full feature implementation

## License
MIT
