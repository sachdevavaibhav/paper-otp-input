# react-native-paper-otp-input

OTP Input component for react native paper

## Installation

```sh
npm install react-native-paper-otp-input
```

## Usage

```js
import { PaperOtpInput } from 'react-native-paper-otp-input';

// You need to wrap it around scroll view for input blur to
//work properly
<PaperOtpInput
  autoFocus={false}
  onPinReady={(pin) => {
    console.log('Do something when the pin is ready');
  }}
  maxLength={4}
/>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
