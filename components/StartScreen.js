import React, { useState } from 'react';
import { View, StyleSheet, Modal, ImageBackground, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleStartModal = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    setModalVisible(false);
    navigation.navigate('HomeScreen'); 
  };

  return (
      <ImageBackground
        source={require('../assets/bg.gif')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
       
        <LottieView
          source={require('../animation_lkutmysr.json')}
          autoPlay
          loop
          style={styles.animation}
        />
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStartModal}
        >
          <LottieView
            source={require('../start.json')}
            autoPlay
            loop
            style={styles.startButtonAnimation}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <LottieView
              source={require('../startmodal.json')}
              autoPlay
              loop
              style={styles.modalAnimation}
            />
            <Text style={styles.modalText}>Welcome to Comprehension!</Text>
            <Text style={styles.modalInfoText}>
              Get ready to start your fun reading journey and improve your reading comprehension skills.
              Choose your grade level below:
            </Text>
            <TouchableOpacity
              style={styles.okButton}
              onPress={handleModalOk}
            >
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
  startButton: {
    marginTop: 20,
  },
  startButtonAnimation: {
    width: 100,
    height: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: 300,
  },
  modalAnimation: {
    width: 200,
    height: 200,
  },
  modalText: {
    color: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  modalInfoText: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  okButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  okButtonText: {
    color: 'white',
    fontSize: 16,
  },
  newAnimationStyle: {
    width: 150,
    height: 150, 
    marginTop: 20,
  },
});

export default SplashScreen;

