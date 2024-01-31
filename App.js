// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen1 from './components/SplashScreen1';
// import SplashScreen2 from './components/SplashScreen2';
// import StartScreen from './components/StartScreen';

// import HomeScreen from './components/HomeScreen';
// import LevelsScreen from './components/LevelsScreen';
// import Grade4EasyQuiz from './components/Grade4EasyQuiz';
// import Grade4ModerateQuiz from './components/Grade4ModerateQuiz';
// import Grade4DifficultQuiz from './components/Grade4DifficultQuiz';
// import Grade5EasyQuiz from './components/Grade5EasyQuiz';
// import Grade5ModerateQuiz from './components/Grade5ModerateQuiz';
// import Grade5DifficultQuiz from './components/Grade5DifficultQuiz';
// import Grade6EasyQuiz from './components/Grade6EasyQuiz';
// import Grade6ModerateQuiz from './components/Grade6ModerateQuiz';
// import Grade6DifficultQuiz from './components/Grade6DifficultQuiz';

// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSplashScreen1Shown, setIsSplashScreen1Shown] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setIsSplashScreen1Shown(false), 3000);  
//     setTimeout(() => setIsLoading(false), 6000);
//   }, []);

//   if (isSplashScreen1Shown) {
//     return <SplashScreen1 />;
//   }

//   if (isLoading) {
//     return <SplashScreen2 />;
//   }


//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="StartScreen">
//         <Stack.Screen
//           name="StartScreen"
//           component={StartScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen
//           name="Levels"
//           component={LevelsScreen}
//           options={({ route }) => ({ title: `Grade ${route.params.grade}` })}
//         />
//         <Stack.Screen
//           name="Grade4EasyQuiz"
//           component={Grade4EasyQuiz}
//           options={{ title: 'Grade 4 - Easy Quiz' }}
//         />
//         <Stack.Screen
//           name="Grade4ModerateQuiz"
//           component={Grade4ModerateQuiz}
//           options={{ title: 'Grade 4 - Moderate Quiz' }}
//         />
//         <Stack.Screen
//           name="Grade4DifficultQuiz"
//           component={Grade4DifficultQuiz}
//           options={{ title: 'Grade 4 - Difficult Quiz' }}
//         />
//         <Stack.Screen
//           name="Grade5EasyQuiz"
//           component={Grade5EasyQuiz}
//           options={{ title: 'Grade 5 - Easy Quiz' }}
//         />
//         <Stack.Screen
//           name="Grade5ModerateQuiz"
//           component={Grade5ModerateQuiz}
//           options={{ title: 'Grade 5 - Moderate Quiz' }}
//         />
//         <Stack.Screen
//           name="Grade5DifficultQuiz"
//           component={Grade5DifficultQuiz}
//           options={{ title: 'Grade 5 - Difficult Quiz' }}
//         />
//         <Stack.Screen
//           name="Grade6EasyQuiz"
//           component={Grade6EasyQuiz}
//           options={{ title: 'Grade 6 - Easy Quiz' }}
//         />
//         <Stack.Screen
//           name="Grade6ModerateQuiz"
//           component={Grade6ModerateQuiz}
//           options={{ title: 'Grade 6 - Moderate Quiz' }}
//         />
//         <Stack.Screen
//           name="Grade6DifficultQuiz"
//           component={Grade6DifficultQuiz}
//           options={{ title: 'Grade 6 - Difficult Quiz' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Audio } from 'expo-av'; // Import Audio from expo-av
import SplashScreen1 from './components/SplashScreen1';
import SplashScreen2 from './components/SplashScreen2';
import StartScreen from './components/StartScreen';

import HomeScreen from './components/HomeScreen';
import LevelsScreen from './components/LevelsScreen';
import Grade4EasyQuiz from './components/Grade4EasyQuiz';
import Grade4ModerateQuiz from './components/Grade4ModerateQuiz';
import Grade4DifficultQuiz from './components/Grade4DifficultQuiz';
import Grade5EasyQuiz from './components/Grade5EasyQuiz';
import Grade5ModerateQuiz from './components/Grade5ModerateQuiz';
import Grade5DifficultQuiz from './components/Grade5DifficultQuiz';
import Grade6EasyQuiz from './components/Grade6EasyQuiz';
import Grade6ModerateQuiz from './components/Grade6ModerateQuiz';
import Grade6DifficultQuiz from './components/Grade6DifficultQuiz';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSplashScreen1Shown, setIsSplashScreen1Shown] = useState(true);

  // Background music related state and audio setup
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load background music when the component mounts
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('./components/compresound.m4a') // Replace with your actual audio file
      );
      setSound(sound);
      await sound.playAsync(); // Auto-play the background music
      setIsPlaying(true);
      setIsSplashScreen1Shown(false); // Move this line here
      setIsLoading(false); // Move this line here
    };

    loadSound();

    // Cleanup function to stop the background music when the component unmounts
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const toggleSound = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (isSplashScreen1Shown) {
    return <SplashScreen1 />;
  }

  if (isLoading) {
    return <SplashScreen2 />;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="Levels"
          component={LevelsScreen}
          options={({ route }) => ({ title: `Grade ${route.params.grade}` })}
        />
        <Stack.Screen
          name="Grade4EasyQuiz"
          component={Grade4EasyQuiz}
          options={{ title: 'Grade 4 - Easy Quiz' }}
        />
        <Stack.Screen
          name="Grade4ModerateQuiz"
          component={Grade4ModerateQuiz}
          options={{ title: 'Grade 4 - Moderate Quiz' }}
        />
        <Stack.Screen
          name="Grade4DifficultQuiz"
          component={Grade4DifficultQuiz}
          options={{ title: 'Grade 4 - Difficult Quiz' }}
        />
        <Stack.Screen
          name="Grade5EasyQuiz"
          component={Grade5EasyQuiz}
          options={{ title: 'Grade 5 - Easy Quiz' }}
        />
        <Stack.Screen
          name="Grade5ModerateQuiz"
          component={Grade5ModerateQuiz}
          options={{ title: 'Grade 5 - Moderate Quiz' }}
        />
        <Stack.Screen
          name="Grade5DifficultQuiz"
          component={Grade5DifficultQuiz}
          options={{ title: 'Grade 5 - Difficult Quiz' }}
        />
        <Stack.Screen
          name="Grade6EasyQuiz"
          component={Grade6EasyQuiz}
          options={{ title: 'Grade 6 - Easy Quiz' }}
        />
        <Stack.Screen
          name="Grade6ModerateQuiz"
          component={Grade6ModerateQuiz}
          options={{ title: 'Grade 6 - Moderate Quiz' }}
        />
        <Stack.Screen
          name="Grade6DifficultQuiz"
          component={Grade6DifficultQuiz}
          options={{ title: 'Grade 6 - Difficult Quiz' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
