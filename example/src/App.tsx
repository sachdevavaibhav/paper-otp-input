import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native';
import { PaperOtpInput } from 'react-native-paper-otp-input';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <PaperOtpInput
          autoFocus={false}
          onPinReady={(pin) => {
            console.log('Pin is ready:', pin);
          }}
          maxLength={4}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
