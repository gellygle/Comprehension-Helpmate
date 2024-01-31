import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SecondSplashScreen = () => {
  return (
    <LinearGradient
      colors={['#32DC82', '#3875D3']}
      style={styles.container}>
      <Image
        source={require('../assets/forsplash.png')}
        style={styles.logo}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default SecondSplashScreen;
