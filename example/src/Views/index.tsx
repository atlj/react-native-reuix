/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  useSharedValueDispatch,
  useSharedValueStore,
} from 'react-native-reuix';
import type { TestStoreType } from '../Store';

function TestView() {
  const sharedValueStore = useSharedValueStore<TestStoreType>();
  const sharedValueDispatch = useSharedValueDispatch<TestStoreType>();

  const testStyleAnimated = useAnimatedStyle(
    () => ({
      opacity: withTiming(sharedValueStore.value.testOpacity),
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
        style={{
          marginTop: 20,
        }}
        onPress={() => {
          sharedValueDispatch('setTestOpacity', 1);
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
          }}
        >
          Click Me
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
        }}
        onPress={() => {
          sharedValueDispatch('setTestOpacity', 0.5);
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
          }}
        >
          Or Me
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TestView;
