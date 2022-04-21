import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import {
  useSharedValueDispatch,
  useSharedValueStore,
} from 'react-native-reuix';
import type { TestStoreType } from '../Store';

function TestView() {
  const sharedValueStore = useSharedValueStore<TestStoreType>();
  const sharedValueDispatch = useSharedValueDispatch<TestStoreType>();

  console.log(sharedValueStore);

  const testStyleAnimated = useAnimatedStyle(
    () => ({
      opacity: sharedValueStore.testOpacity,
    }),
    []
  );

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Animated.View
        style={[
          {
            backgroundColor: 'red',
            width: 100,
            height: 100,
          },
          testStyleAnimated,
        ]}
      />
      <TouchableOpacity
        onPress={() => {
          sharedValueDispatch('setTestOpacity', 0.5);
        }}
      >
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TestView;
