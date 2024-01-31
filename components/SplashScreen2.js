import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/comprehension.png')}
        style={styles.logo} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 300, 
    height: 300,
    resizeMode: 'contain',
  },
});

export default SplashScreen2;
