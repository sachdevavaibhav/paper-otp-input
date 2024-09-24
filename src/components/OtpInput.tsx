import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  TextInput as RNTextInput,
} from 'react-native';
import type { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import type { TextInputProps } from 'react-native-paper';

type OtpInputProps = {
  maxLength: number;
  autoFocus?: boolean;
  onPinChange?: (pin: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  otpContainerStyle?: StyleProp<ViewStyle>;
  otpBoxStyle?: StyleProp<ViewStyle>;
  otpTextStyle?: StyleProp<TextStyle>;
  otpBorderColor?: string;
  otpBorderFocusedColor?: string;
  textInputProps?: TextInputProps;
};

export default function OtpInput({
  maxLength,
  onPinChange,
  autoFocus = true,
  containerStyle,
  otpContainerStyle,
  otpBoxStyle,
  otpTextStyle,
  otpBorderColor = '#F6F6F6',
  otpBorderFocusedColor = '#6200EE',
  textInputProps,
}: OtpInputProps) {
  const [isInputBoxFocused, setIsInputBoxFocused] =
    React.useState<boolean>(autoFocus);
  const [otp, setOtp] = React.useState<string>('');
  const ref = React.useRef<RNTextInput>(null);

  const handlePinChange = React.useCallback(
    (pin: string) => {
      setOtp(pin);
      if (onPinChange) {
        onPinChange(pin);
      }
    },
    [onPinChange]
  );

  const boxArray = new Array(maxLength).fill(0);
  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    ref?.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const containerStyleObject = StyleSheet.flatten([
    defaultStyles.container,
    containerStyle,
  ]);

  const otpContainerStylesObject = StyleSheet.flatten([
    defaultStyles.otpContainer,
    otpContainerStyle,
  ]);

  const otpBoxStyleObject = StyleSheet.flatten([
    defaultStyles.otpBox,
    otpBoxStyle,
  ]);

  const otpTextStyleObject = StyleSheet.flatten([
    defaultStyles.otpText,
    otpTextStyle,
  ]);
  return (
    <View style={containerStyleObject}>
      <TextInput
        mode="outlined"
        style={defaultStyles.textInput}
        theme={{
          roundness: 10,
        }}
        value={otp}
        onChangeText={handlePinChange}
        maxLength={maxLength}
        ref={ref}
        onBlur={handleOnBlur}
        keyboardType="numeric"
        autoFocus={autoFocus}
        {...textInputProps}
      />
      <Pressable style={otpContainerStylesObject} onPress={handleOnPress}>
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
                ...otpBoxStyleObject,
                borderColor:
                  isInputBoxFocused && isValueFocused
                    ? otpBorderFocusedColor
                    : otpBorderColor,
              }}
            >
              <Text style={otpTextStyleObject}>{otp[index] || ''}</Text>
            </View>
          );
        })}
      </Pressable>
    </View>
  );
}

const defaultStyles = StyleSheet.create({
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
