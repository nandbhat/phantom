import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Playground from '../containers/Playground';

const PlaygroundScene = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Playground />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlaygroundScene;
