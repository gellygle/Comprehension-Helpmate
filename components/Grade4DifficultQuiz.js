import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Modal,
  Image,
} from 'react-native';

const Grade4EasyQuiz = () => {
  const [selectedPassage, setSelectedPassage] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [isCorrectModal, setIsCorrectModal] = useState(true);
  const [showVocabularyModal, setShowVocabularyModal] = useState(false);
  const [showNextPassageButton, setShowNextPassageButton] = useState(false);
  const [timer, setTimer] = useState(60);
  const [performanceRemark, setPerformanceRemark] = useState('');
 
 
const passages = [
    {
      title: 'THE LITTLE BIRDS',
      content: '“Chirp, chirp!” the little birds sing. The little birds are thirsty. Where is mama bird? Kirk is the first bird to jump out of the nest. Splat! He lands in the dirt. Shirl flaps her wings. She twirls and swirls to the dirt. Dirk jumps out third. He hits the dirt and squirms. The little birds are thirsty! They see a bird bath that squirts out water but there is a big bird on it. She turns and smirks. “It is Mama bird!” Kirk and Dirk chirp.',
      image: require('./IMAGE/littlebirds.png'),
      questions: [
        {
          question: 'What do the little birds say?',
          options: ['Caw, caw!', 'Tweet, tweet!', 'Chirp, chirp!'],
          answer: 'Chirp, chirp!',
        },
        {
          question: 'What do the little birds need?',
          options: ['Food', 'Water', 'A nest'],
          answer: 'Water',
        },
        {
          question: 'Who is the first bird to jump out of the nest?',
          options: ['Kirk', 'Shirl', 'Dirk'],
          answer: 'Kirk',
        },
        {
          question: 'Where do the little birds land?',
          options: ['In the water', 'In the dirt', 'On a branch'],
          answer: 'In the dirt',
        },
        {
          question: 'How do Kirk and Dirk react when they see the big bird on the bird bath?',
          options: ['They chirp happily', 'They fly away', 'They hide in the nest'],
          answer: 'They chirp happily',
        },
      ],
      vocabulary: [
        { word: 'Chirp', meaning: 'A short, high-pitched sound made by small birds or insects.' },
        { word: 'Splat', meaning: 'A sound or effect like that of an object striking a surface or against a surface.' },
        { word: 'Twirl', meaning: 'Spin around quickly.' },
        { word: 'Squirm', meaning: 'Twist and turn with quick wriggling movements.' },
      ],
    },
    {
      title: 'PICNIC IN THE PARK',
      content: 'Mom and I wanted to go to the park to have a picnic. Mom handed me a picnic basket to fill. I grabbed an apple. We chopped it up. Mom helped me pack more snacks. We packed them in. We filled the basket up quick! Mom and I walked to the park. We spotted Pam and her dog Mack. They trotted over and I hugged Mack. Mark wagged his tail. Then, he jumped up and licked my faced! Oh, silly Mack! We all laughed and grinned.',
      image: require('./IMAGE/picnic.png'),
      questions: [
        {
          question: 'What did Mom hand to the narrator to fill?',
          options: ['A picnic basket', 'A picnic blanket', 'A backpack'],
          answer: 'A picnic basket',
        },
        {
          question: 'What did the narrator grab to put in the basket?',
          options: ['A sandwich', 'A soda', 'An apple'],
          answer: 'An apple',
        },
        {
          question: 'Who helped the narrator pack more snacks?',
          options: ['Dad', 'Mom', 'Pam'],
          answer: 'Mom',
        },
        {
          question: 'What did Mack do when he saw the narrator?',
          options: ['Growled at him', 'Ran away', 'Trotted over'],
          answer: 'Trotted over',
        },
        {
          question: 'How did they react to what Mack did?',
          options: ['They got angry', 'They laughed and grinned', 'They got scared'],
          answer: 'They laughed and grinned',
        },
      ],
      vocabulary: [
        { word: 'Picnic', meaning: 'An outing or occasion that involves taking a packed meal to be eaten outdoors.' },
        { word: 'Chopped', meaning: 'Cut into small pieces with repeated sharp blows.' },
        { word: 'Trotted', meaning: 'Run at a moderate pace with short steps.' },
        { word: 'Grinned', meaning: 'Smiled broadly.' },
      ],
    },
    {
      title: 'COUNTING THE RAIN',
      content: 'I love counting the rain, Mother. As they patter and as I see Do not all the great men like Rizal Count rain, too, when still young like me? See the numerous dropping rains How hard it is for little brains. And I recall the children’s riddle About the old man’s countless canes How I love the fast-falling rain Like a thousand pounding pestles And the little rushing water Down the stream to see it nestles.',
      image: require('./IMAGE/countrain.png'),
      questions: [
        {
          question: 'What does the speaker love to do?',
          options: ['Dance in the rain', 'Count the rain', 'Sing in the rain'],
          answer: 'Count the rain',
        },
        {
          question: 'Who does the speaker mention as someone who might have counted rain when they were young?',
          options: ['Rizal', 'Shakespeare', 'Einstein'],
          answer: 'Rizal',
        },
        {
          question: 'Why does the speaker find it hard to count the rain?',
          options: ['The rain is too loud', 'The rain is too soft', "It's hard for little brains"],
          answer: "It's hard for little brains",
        },
        {
          question: 'What is the children\'s riddle that the speaker recalls?',
          options: ["About the old man's countless canes", "About the young boy's endless games", "About the woman's infinite pains"],
          answer: "About the old man's countless canes",
        },
        {
          question: 'What does the speaker compare the sound of the rain to?',
          options: ['A thousand singing birds', 'A thousand pounding pestles', 'A thousand barking dogs'],
          answer: 'A thousand pounding pestles',
        },
      ],
      vocabulary: [
        { word: 'Patter', meaning: 'Make a repeated light tapping sound.' },
        { word: 'Numerous', meaning: 'Great in number; many.' },
        { word: 'Recall', meaning: 'Remember.' },
        { word: 'Countless', meaning: 'Too many to be counted; very many.' },
      ],
    }
  ];
  
  
  useEffect(() => {
    let timerInterval;
    if (showQuiz && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (showQuiz) {
      setTimer(60); // Initialize the timer to 60 seconds when showQuiz becomes true
    }
    return () => clearInterval(timerInterval);
  }, [showQuiz, timer]);

const handleAnswerButtonClick = (option) => {
  clearInterval(timer);
  const currentPassage = passages[selectedPassage];
  const currentQuestionData = currentPassage.questions[currentQuestion];
  const isCorrect = option === currentQuestionData.answer;

  if (isCorrect) {
    setScore(score + 1);
  }

  setShowModal(true);
  setIsCorrectModal(isCorrect);
  setModalText(isCorrect ? 'Correct!' : 'Wrong!');

  setSelectedOption(option);

  setTimeout(() => {
    setShowModal(false);
    setIsCorrectModal(true);

    if (currentQuestion < currentPassage.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(60);
      setSelectedOption(null);
    } else {
      const totalQuestions = currentPassage.questions.length;
      const percentage = (score / totalQuestions) * 100;

      if (percentage === 100) {
        setPerformanceRemark('Excellent! Perfect score!');
      } else if (percentage >= 80) {
        setPerformanceRemark('Great job! Almost perfect!');
      } else if (percentage >= 60) {
        setPerformanceRemark('Excellent');
      } else {
        setPerformanceRemark('Oops! Better luck next time.');
      }

      setShowScore(true);
      setShowNextPassageButton(true);
      setTimer(0);
    }
  }, 2000);
};


  const handleNextQuestion = () => {
    setShowModal(false); // Reset showModal state
    clearInterval(timer);
    const currentPassage = passages[selectedPassage];
    if (currentQuestion < currentPassage.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(60); // Set the timer to 60 seconds
    } else {
      setShowScore(true);
      setShowNextPassageButton(true);
      setTimer(0);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
    setShowNextPassageButton(false);
    setTimer(60);
    setPerformanceRemark(''); // Reset performance remark
  };

  const handleNextPassage = () => {
    setSelectedPassage(null);
    setShowScore(false);
    setShowQuiz(false);
    setTimer(10);
  };

  const openVocabularyModal = () => {
    setShowVocabularyModal(true);
  };

  const closeVocabularyModal = () => {
    setShowVocabularyModal(false);
  };

  return (
    <View style={styles.container}>
      {selectedPassage === null ? (
        <ImageBackground
          source={require('../bgdesign.png')}
          style={styles.backgroundImage}>
          {/* Passage Selection Section */}
          <ScrollView contentContainerStyle={styles.passageListContainer}>
            {passages.map((passage, index) => (
              <TouchableOpacity
                key={index}
                style={styles.passageListItem}
                onPress={() => {
                  setSelectedPassage(index);
                  setShowQuiz(false);
                }}>
                <Text style={styles.passageListItemText}>{passage.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={require('../bgdesign.png')}
          style={styles.backgroundImage}>
          {showQuiz ? (
            <ScrollView contentContainerStyle={styles.quizContainer}>
              {/* Quiz Section */}
              {!showScore &&
                currentQuestion <
                  passages[selectedPassage].questions.length && (
                  <>
                    <Text style={styles.question}>
                      {
                        passages[selectedPassage].questions[currentQuestion]
                          .question
                      }
                    </Text>
                    {passages[selectedPassage].questions[
                      currentQuestion
                    ].options.map((option, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.optionButton,
                          selectedOption === option &&
                            styles.selectedOptionButton,
                        ]}
                        onPress={() => handleAnswerButtonClick(option)}>
                        <Text style={styles.optionText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                    <Text
                      style={
                        styles.timerText
                      }>{`Time Remaining: ${timer}s`}</Text>
                  </>
                )}
              {/* Result Modal */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}>
                <View style={styles.modalContainer}>
                  <View
                    style={[
                      styles.modalContent,
                      isCorrectModal ? styles.correctModal : styles.wrongModal,
                    ]}>
                    <Text style={styles.modalText}>{modalText}</Text>
                  </View>
                </View>
              </Modal>
            </ScrollView>
          ) : (
            // Passage Display Section
            <ScrollView contentContainerStyle={styles.passageContainer}>
              <Image
                source={passages[selectedPassage].image}
                style={styles.passageImage}
              />
              <Text style={styles.passageTitle}>
                {passages[selectedPassage].title}
              </Text>
              <ScrollView>
                <Text style={styles.passageContent}>
                  {passages[selectedPassage].content}
                </Text>
              </ScrollView>
            </ScrollView>
          )}

          {!showQuiz && (
            <View style={styles.buttonContainer}>
              {/* Proceed to Quiz Button */}
              <TouchableOpacity
                style={styles.proceedButton}
                onPress={() => {
                  setShowQuiz(true);
                  setTimer(0);
                }}>
                <Text style={styles.buttonText}>Proceed to Quiz</Text>
              </TouchableOpacity>
              {/* Vocabulary Button */}
              <TouchableOpacity
                style={styles.vocabButton}
                onPress={openVocabularyModal}>
                <Text style={styles.buttonText}>Vocabulary</Text>
              </TouchableOpacity>
            </View>
          )}

          {showScore && (
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>{`Your Score: ${score}/${passages[selectedPassage].questions.length}`}</Text>
              <Text style={styles.remarkText}>{performanceRemark}</Text>
              <View style={styles.buttonContainer}>
                {/* Retry Button */}
                <TouchableOpacity style={styles.button} onPress={handleRetry}>
                  <Text style={styles.buttonText}>Retry</Text>
                </TouchableOpacity>
                {/* Next Passage Button */}
                <TouchableOpacity
                  style={[styles.button, styles.nextButton]}
                  onPress={handleNextPassage}>
                  <Text style={styles.buttonText}>Next Passage</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Vocabulary Modal */}
          {showVocabularyModal && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={showVocabularyModal}
              onRequestClose={closeVocabularyModal}>
              <View style={styles.vocabularyModalContainer}>
                <View style={styles.vocabularyModalContent}>
                  <Text style={styles.vocabularyModalTitle}>Vocabulary</Text>
                  {passages[selectedPassage].vocabulary.map((item, index) => (
                    <View key={index} style={styles.vocabularyItem}>
                      <Text style={styles.vocabularyText}>{item.word}</Text>
                      <Text style={styles.vocabularyMeaning}>
                        {item.meaning}
                      </Text>
                    </View>
                  ))}
                  {/* Close Vocabulary Modal Button */}
                  <TouchableOpacity
                    style={styles.closeVocabButton}
                    onPress={closeVocabularyModal}>
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passageListContainer: {
    padding: 20,
    marginTop:20

    
  },
  passageListItem: {
    backgroundColor: '#3498db',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  passageListItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  quizContainer: {
     fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop:90,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    fontFamily: 'Comic Sans MS',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',
  },
  optionButton: {
    backgroundColor: '#3498db',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: '#2980b9',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 16,
    marginTop: 10,
    color: '#e74c3c',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  correctModal: {
    backgroundColor: '#2ecc71',
  },
  wrongModal: {
    backgroundColor: '#e74c3c',
  },
  modalText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  passageContainer: {
    padding: 15,
    alignItems: 'center',
  },
  passageImage: {
    width: 300,
    height: 200,
    marginTop:3,
    marginBottom: 10,
    borderRadius: 10,
  },
  passageTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3498db',
  },
  passageContent: {
   fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    fontFamily: 'Comic Sans MS',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  proceedButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
  },
  vocabButton: {
    backgroundColor: '#f39c12',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
 scoreContainer: {
  alignItems: 'center',
  marginTop: 10,
  padding: 20, // Add padding to create separation
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add a background color for scoring UI
  borderRadius: 10,
},

scoreText: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#fff', // Adjust text color
  marginBottom: 20,
},
remarkText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#e74c3c',
  marginBottom: 10,
  textAlign: 'center',
  color: '#fff', // Adjust text color
},

  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#2ecc71',
  },
  retryButton: {
    backgroundColor: '#e74c3c',
  },
  vocabularyModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vocabularyModalContent: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  vocabularyModalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3498db',
  },
  vocabularyItem: {
    marginBottom: 10,
  },
  vocabularyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  vocabularyMeaning: {
    fontSize: 18,
    color: '#555',
  },
  closeVocabButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  remarkText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#e74c3c',
  marginBottom: 10,
  textAlign: 'center',
},

});
export default Grade4EasyQuiz;
