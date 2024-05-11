import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  TextInput as RNTextInput,
} from 'react-native';
import { TextInput, Text } from 'react-native-paper';

type OtpInputProps = {
  maxLength: number;
  autoFocus?: boolean;
  onPinReady?: (pin: string) => void;
};

export default function OtpInput({
  maxLength,
  onPinReady,
  autoFocus = true,
}: OtpInputProps) {
  const [isInputBoxFocused, setIsInputBoxFocused] = React.useState(autoFocus);
  const [otp, setOtp] = React.useState('');
  const [isPinReady, setIsPinReady] = React.useState(false);
  const ref = React.useRef<RNTextInput>(null);

  React.useEffect(() => {
    setIsPinReady(otp.length === maxLength);
    return () => {
      setIsPinReady(false);
    };
  }, [maxLength, otp, setIsPinReady]);

  React.useEffect(() => {
    if (isPinReady) {
      onPinReady && onPinReady(otp);
    }
  }, [isPinReady, onPinReady, otp]);

  const boxArray = new Array(maxLength).fill(0);
  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    ref?.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        style={styles.textInput}
        theme={{
          roundness: 10,
        }}
        value={otp}
        onChangeText={setOtp}
        maxLength={maxLength}
        ref={ref}
        onBlur={handleOnBlur}
        keyboardType="numeric"
        autoFocus={autoFocus}
      />
      <Pressable style={styles.otpContainer} onPress={handleOnPress}>
        {boxArray.map((_, index) => {
          const isCurrentValue = index === otp.length;
          const isLastValue = index === maxLength - 1;
          const isCodeComplete = otp.length === maxLength;

          const isValueFocused =
            isCurrentValue || (isLastValue && isCodeComplete);
          return (
            <View
              key={index}
              style={{
                ...styles.otpBox,
                borderColor:
                  isInputBoxFocused && isValueFocused ? '#6200EE' : '#F6F6F6',
              }}
            >
              <Text style={styles.otpText}>{otp[index] || ''}</Text>
            </View>
          );
        })}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  textInput: {
    position: 'absolute',
    opacity: 0,
  },
  otpContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  otpBox: {
    backgroundColor: '#F6F6F6',
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    maxWidth: 45,
    minWidth: 45,
    maxHeight: 45,
    minHeight: 45,
    justifyContent: 'center',
  },
  otpText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
});
