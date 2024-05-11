import React from 'react';
import { PaperProvider } from 'react-native-paper';
import App from '../src/App';
export default function RootLayout() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
