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

## Backend
Requires a compatible self-hosted backend API with `/health` endpoint.

## Development
- Server config stored securely
- Ready for full feature implementation

## License
MIT
