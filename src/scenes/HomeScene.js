import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from '../containers/Home';

const HomeScene = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Home navigation={navigation} />
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

export default HomeScene;
