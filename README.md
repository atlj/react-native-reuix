# react-native-reuix

A [redux](https://github.com/reduxjs/redux)-like store system for React Native Reanimated 2 shared values

## Prerequisites

This module needs

[React Native Reanimated 2](https://docs.swmansion.com/react-native-reanimated/docs) to work, first make sure you have this package installed

## Installation

### Using Yarn

```sh
yarn add react-native-reuix
```
### Using npm

```sh
npm install react-native-reuix
```


## Usage

### 1. Create a Store

```ts
export const sharedValueStore = createSharedValueStore({
  initialState: {
    testOpacity: 0.5,
  },
  actions: {
    setTestOpacity(state, payload: number) {
      state.testOpacity = payload;
    },
  },
});
```

### 2. Wrap Your App With SharedValueStoreProvider and Pass Your Store

```tsx
export default function App() {
  return (
    <SharedValueStoreProvider store={sharedValueStore}>
      <TestView />
    </SharedValueStoreProvider>
  );
}
```

### 3. Read Values From Store

Get the store using useSharedValueStore hook

```ts
const sharedValueStore = useSharedValueStore<TestStoreType>();
```

Then you can freely read values from store

```ts
sharedValueStore.value.testOpacity
```

### 4. Dispatch Actions to Change Values

Get the dispatcher using useSharedValueDispatch hook

```ts
const sharedValueDispatch = useSharedValueDispatch<TestStoreType>();
```

Dispatch actions to change values

```ts
sharedValueDispatch('setTestOpacity', 1);
```

## Rest

Rest of the docs are coming soon

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
