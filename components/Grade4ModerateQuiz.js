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
      title: 'OUR SCHOOL',
      content: 'Our school is big. It is beautiful.\nWe have a flag in front of our school.\nWe have a garden in our school, too.\nOur school is clean. We help clean our school.',
       image: require('./IMAGE/school.png'),
      questions: [
        {
          question: 'What does the story tell about?',
          options: ['House', 'School', 'Garden'],
          answer: 'School',
        },
        {
          question: 'Which word tells about the school?',
          options: ['small', 'dirty', 'beautiful'],
          answer: 'beautiful',
        },
        {
          question: 'What do we do to make our school clean?',
          options: ['Play inside', 'Help clean', 'Put paint'],
          answer: 'Help clean',
        },
        {
          question: 'What do we have in front of our school?',
          options: ['flag', 'house', 'store'],
          answer: 'flag',
        },
        {
          question: 'What else has our school?',
          options: ['garden', 'flowers', 'grass'],
          answer: 'garden',
        },
      ],
        vocabulary: [
        { word: 'Big', meaning: 'Of considerable size or extent.' },
        { word: 'Strong', meaning: 'Physically powerful; capable of exerting great force.' },
        { word: 'Breakfast', meaning: 'The first meal of the day, usually eaten in the morning.' },
        { word: 'Vegetables', meaning: 'Plants cultivated for their edible parts, such as roots, stems, leaves, or fruits.' },
        { word: 'Play', meaning: 'Engage in activity for enjoyment and recreation.' },
      ],
    
    },
    {
      title: 'VEGETABLES',
      content: '“Look Father,” shouted Leon.\n“Our beans have fruits.\n“Our patola plants have fruits, too.”\n“Let us pick some of them,” Father said.\n“We shall sell them in the market. Mother will cook some, too.”',
       image: require('./IMAGE/vegetables.png'),
      questions: [
        {
          question: 'Who saw the fruits of beans and patola?',
          options: ['Leon', 'Father', 'Mother'],
          answer: 'Leon',
        },
        {
          question: 'What will they do with the fruits?',
          options: ['They will eat all of them.', 'They will sell some and eat some.', 'They will give them away.'],
          answer: 'They will sell some and eat some.',
        },
        {
          question: 'What will Mother do with some of the fruits?',
          options: ['Give them away.', 'Throw them away.', 'Cook them.'],
          answer: 'Cook them.',
        },
        {
          question: 'What does Father want to do?',
          options: ['He wants to water the vegetables.', 'He wants to pick some of the fruits.', 'He wants to eat the vegetables.'],
          answer: 'He wants to pick some of the fruits.',
        },
        {
          question: 'Where will Father take the vegetables?',
          options: ['To the store', 'to the kitchen', 'to the market'],
          answer: 'to the market',
        },
      ],
        vocabulary: [
        { word: 'Big', meaning: 'Of considerable size or extent.' },
        { word: 'Strong', meaning: 'Physically powerful; capable of exerting great force.' },
        { word: 'Breakfast', meaning: 'The first meal of the day, usually eaten in the morning.' },
        { word: 'Vegetables', meaning: 'Plants cultivated for their edible parts, such as roots, stems, leaves, or fruits.' },
        { word: 'Play', meaning: 'Engage in activity for enjoyment and recreation.' },
      ],
    
    },
    {
      title: 'GUESS',
      content: '“Can you guess who I am?” asked Tito.\n“I teach children.\nI teach them to read and write.\nI teach them to be good.\nI teach them how to be polite and helpful.”',
       image: require('./IMAGE/guess.png'),
      questions: [
        {
          question: 'Who is talking in the story?',
          options: ['Tito', 'Brother', 'Father'],
          answer: 'Tito',
        },
        {
          question: 'What did he ask the other children to guess?',
          options: ['What he is', 'Where he is', 'Who he is'],
          answer: 'What he is',
        },
        {
          question: 'What does a teacher teach in school?',
          options: ['Jump and run', 'Sleep and play', 'Read and write'],
          answer: 'Read and write',
        },
        {
          question: 'What else does she teach in school?',
          options: ['How to eat', 'How to cross the street', 'How to be good'],
          answer: 'How to be good',
        },
        {
          question: 'What else does she teach the children?',
          options: ['To watch TV', 'To be polite and helpful', 'To go home'],
          answer: 'To be polite and helpful',
        },
      ],
       vocabulary: [
        { word: 'Big', meaning: 'Of considerable size or extent.' },
        { word: 'Strong', meaning: 'Physically powerful; capable of exerting great force.' },
        { word: 'Breakfast', meaning: 'The first meal of the day, usually eaten in the morning.' },
        { word: 'Vegetables', meaning: 'Plants cultivated for their edible parts, such as roots, stems, leaves, or fruits.' },
        { word: 'Play', meaning: 'Engage in activity for enjoyment and recreation.' },
      ],
    
    },
    {
      title: 'FLYING KITES',
      content: '“Let us fly our kites,” said Celo. “It is good to fly kites now.\nThe wind will help us fly our kites. The boys made their kites fly.\nThey had blue kites, red kites, green kites, and yellow kites. Their kites went up,\nup in the sky. They looked like birds up in the sky.',
       image: require('./IMAGE/kites.png'),
      questions: [
        {
          question: 'Who asked the boys to fly kites?',
          options: ['Celo', 'Cenon', 'Celso'],
          answer: 'Celo',
        },
        {
          question: 'What helped them fly the kites?',
          options: ['wind', 'rain', 'clouds'],
          answer: 'wind',
        },
        {
          question: 'What are the colors of the kites?',
          options: ['white, black, orange', 'green, white, yellow', 'blue, red, green, yellow'],
          answer: 'blue, red, green, yellow',
        },
        {
          question: 'Where did the kites fly?',
          options: ['Up on the houses', 'Up on the trees', 'Up in the sky'],
          answer: 'Up in the sky',
        },
        {
          question: 'What did the kites look like?',
          options: ['Birds', 'Clouds', 'Sheep'],
          answer: 'Birds',
        },
      ],   vocabulary: [
        { word: 'Big', meaning: 'Of considerable size or extent.' },
        { word: 'Strong', meaning: 'Physically powerful; capable of exerting great force.' },
        { word: 'Breakfast', meaning: 'The first meal of the day, usually eaten in the morning.' },
        { word: 'Vegetables', meaning: 'Plants cultivated for their edible parts, such as roots, stems, leaves, or fruits.' },
        { word: 'Play', meaning: 'Engage in activity for enjoyment and recreation.' },
      ],
    
    },
    {
      title: 'SHELLFISH',
      content: '“Mother, what’s this?” Sherbet asked showing a shell she found on the beach.\nThat is an empty home of a small animal called shellfish.\nShellfish has a soft body so it needs a hard shell to protect it from starfish, crabs, fish, or even birds.',
       image: require('./IMAGE/shellfish.png'),
      questions: [
        {
          question: 'Who found a shell?',
          options: ['Mother', 'Sherbet', 'Fisherman'],
          answer: 'Sherbet',
        },
        {
          question: 'Where did she find the shell?',
          options: ['On the beach', 'In the sea', 'In the yard'],
          answer: 'On the beach',
        },
        {
          question: 'What animal lived in the shell?',
          options: ['Fish', 'Crab', 'Shellfish'],
          answer: 'Shellfish',
        },
        {
          question: 'What kind of body does a shellfish have?',
          options: ['Soft', 'Hard', 'Hairy'],
          answer: 'Soft',
        },
        {
          question: 'What sea animal eats shellfish?',
          options: ['Cat', 'Dog', 'Fish'],
          answer: 'Fish',
        },
      ],
       vocabulary: [
        { word: 'Big', meaning: 'Of considerable size or extent.' },
        { word: 'Strong', meaning: 'Physically powerful; capable of exerting great force.' },
        { word: 'Breakfast', meaning: 'The first meal of the day, usually eaten in the morning.' },
        { word: 'Vegetables', meaning: 'Plants cultivated for their edible parts, such as roots, stems, leaves, or fruits.' },
        { word: 'Play', meaning: 'Engage in activity for enjoyment and recreation.' },
      ],
  
    },
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
  padding: 20, 
  backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  borderRadius: 10,
},

scoreText: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#fff', 
  marginBottom: 20,
},
remarkText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#e74c3c',
  marginBottom: 10,
  textAlign: 'center',
  color: '#fff', 
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
