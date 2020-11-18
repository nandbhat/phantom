import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Playground = () => {
  return (
    <View style={styles.home}>
      <Text>Playground</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Playground;
