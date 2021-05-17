import React, {useRef} from 'react';
import {Animated, Easing, View, StyleSheet, Button} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation01Screen = () => {
  const {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
  } = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100, 700);
        }}
      />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
    margin: 20,
  },
});
