import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Grade4EasyQuiz from './Grade4EasyQuiz';
import Grade4ModerateQuiz from './Grade4ModerateQuiz';
import Grade4DifficultQuiz from './Grade4DifficultQuiz';
import Grade5EasyQuiz from './Grade5EasyQuiz';
import Grade5ModerateQuiz from './Grade5ModerateQuiz';
import Grade5DifficultQuiz from './Grade5DifficultQuiz';
import Grade6EasyQuiz from './Grade6EasyQuiz';
import Grade6ModerateQuiz from './Grade6ModerateQuiz';
import Grade6DifficultQuiz from './Grade6DifficultQuiz';

const HomeScreen = ({ navigation }) => {
  const handleGradePress = (grade, easyQuiz, moderateQuiz, difficultQuiz) => {
    if (navigation) {
      navigation.navigate('Levels', {
        grade,
        easyQuiz,
        moderateQuiz,
        difficultQuiz,
      });
    }
  };

  return (
    <LinearGradient colors={['#32DC82', '#3875D3']} style={styles.gradient}>
      <ImageBackground
        source={require('../bgdesign.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Welcome to Comprehension Helpmate!</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <GradeButton
              grade={4}
              onPress={() =>
                handleGradePress(
                  4,
                  Grade4EasyQuiz,
                  Grade4ModerateQuiz,
                  Grade4DifficultQuiz
                )
              }
            />
            <GradeButton
              grade={5}
              onPress={() =>
                handleGradePress(
                  5,
                  Grade5EasyQuiz,
                  Grade5ModerateQuiz,
                  Grade5DifficultQuiz
                )
              }
            />
            <GradeButton
              grade={6}
              onPress={() =>
                handleGradePress(
                  6,
                  Grade6EasyQuiz,
                  Grade6ModerateQuiz,
                  Grade6DifficultQuiz
                )
              }
            />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const GradeButton = ({ grade, onPress }) => (
  <TouchableOpacity
    style={[
      styles.gradeButton,
      { backgroundColor: getGradeColor(grade) },
      styles.buttonShadow,
    ]}
    onPress={onPress}>
    <Text style={styles.gradeButtonText}>Grade {grade}</Text>
  </TouchableOpacity>
);

const getGradeColor = (grade) => {
  switch (grade) {
    case 4:
      return '#FF9C33';
    case 5:
      return '#FF5733';
    case 6:
      return '#FF3333';
    default:
      return '#FF9C33';
  }
};

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
  buttonWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -100 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: '7%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    fontFamily: 'Comic Sans MS', 
  },
  gradeButton: {
    width: 200, 
    height: 80,
    borderRadius: 40,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700', 
  },
  gradeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
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

export default HomeScreen;
