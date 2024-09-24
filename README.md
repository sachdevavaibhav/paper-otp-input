# react-native-paper-otp-input

- Customizable OTP input component for react-native-paper
- Built with react-native-paper components and TypeScript
- Supports custom styles

## Installation

```sh
npm install react-native-paper-otp-input
```

or

```sh
yarn add react-native-paper-otp-input
```

## Usage

```js
import { PaperOtpInput } from 'react-native-paper-otp-input';

// You need to wrap it around scroll view for input blur to
//work properly
<PaperOtpInput
  maxLength={4}
  onPinChange={(pin) => {
    console.log('Pin is ready:', pin);
  }}
/>;
```

**Give this repository a star 🌟, if you found this package useful.**

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Author

- Vaibhav Sachdeva [(@sachdevavaibhav)](https://github.com/sachdevavaibhav)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
