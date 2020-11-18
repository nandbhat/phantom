import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Routes from '../navigation/routes';

const Home = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Text
        onPress={() => {
          navigation.navigate(Routes.PLAYGROUND);
        }}>
        Home
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Home;
