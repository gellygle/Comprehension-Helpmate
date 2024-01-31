import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LevelsScreen = ({ navigation, route }) => {
  const { grade, easyQuiz, moderateQuiz, difficultQuiz } = route.params;

  return (
    <LinearGradient colors={['#32DC82', '#3875D3']} style={styles.gradient}>
      <ImageBackground source={require('../bgdesign.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.levelText}>Choose Difficulty Level for Grade {grade}</Text>
          <LevelButton
            label="Easy"
            onPress={() => navigation.navigate(`Grade${grade}EasyQuiz`, { quizData: easyQuiz })}
          />
          <LevelButton
            label="Moderate"
            onPress={() => navigation.navigate(`Grade${grade}ModerateQuiz`, { quizData: moderateQuiz })}
          />
          <LevelButton
            label="Difficult"
            onPress={() => navigation.navigate(`Grade${grade}DifficultQuiz`, { quizData: difficultQuiz })}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const LevelButton = ({ label, onPress }) => (
  <TouchableOpacity style={[styles.levelButton, styles.buttonShadow]} onPress={onPress}>
    <Text style={styles.levelButtonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  levelButton: {
    width: 200, 
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5733', 
  },
  levelButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Comic Sans MS', 
  },
  buttonShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
  },
});

export default LevelsScreen;
