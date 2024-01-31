import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Modal,
} from 'react-native';

const Grade6DifficultQuiz = () => {
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

 
  const passages = [
    {
      title: "THE EYEBROWS",
      content: "Eyebrows are part of the face which serve two purposes—for beauty and protection.\nEyebrows make the face look more beautiful by calling attention to the eyes. They make the eyes look healthier and brighter.\nEyebrows not only beautify the face but also protect the eyes from sweat. Without the eyebrows, drops of sweat may run into the eyes and blur the sight. Sweat in itself is poisonous and should be rid-off.",
      questions: [
        {
          question: "The part of the body mentioned in the selection is the",
          options: [
            "eyelashes",
            "eyelids",
            "eyebrows",
          ],
          answer: "eyebrows",
        },
        {
          question: "They call attention to the",
          options: [
            "nose",
            "eyes",
            "cheeks",
          ],
          answer: "eyes",
        },
        {
          question: "They make them look",
          options: [
            "uglier",
            "healthier",
            "funnier",
          ],
          answer: "healthier",
        },
        {
          question: "Sweat can blur the sense of",
          options: [
            "sight",
            "smell",
            "hearing",
          ],
          answer: "sight",
        },
      ],
      vocabulary: [
        { word: "Eyebrows", meaning: "The strip of hair growing on the ridge above a person's eye socket." },
        { word: "Beautify", meaning: "To make beautiful or more beautiful." },
        // ... (other vocabulary words)
      ],
    },
    {
      title: "THE RAIN",
      content: "It is raining\n“It is raining hard,” said Lani.\nThe rain is falling on the houses.\nThe rain is falling on the trees.\nThere is water on the streets.\n“I will not go to school today,” said Tita.\n“I might catch cold.”",
      questions: [
        {
          question: "Who will not go to school?",
          options: [
            "Tita",
            "Lani",
            "A. Girl",
          ],
          answer: "Tita",
        },
        {
          question: "Why will she not go to school?",
          options: [
            "It is cold.",
            "It is raining.",
            "It is warm.",
          ],
          answer: "It is raining.",
        },
        {
          question: "What filled the streets with water?",
          options: [
            "wind",
            "clouds",
            "rain",
          ],
          answer: "rain",
        },
        {
          question: "Where is the rain falling?",
          options: [
            "on the houses and trees",
            "in the classroom",
            "in the garden",
          ],
          answer: "on the houses and trees",
        },
        {
          question: "Why will Tita not go to school?",
          options: [
            "She may catch cold.",
            "She has no umbrella.",
            "She will play.",
          ],
          answer: "She may catch cold.",
        },
      ],
      vocabulary: [
        { word: "Raining", meaning: "The process of water droplets falling from the sky." },
        { word: "Streets", meaning: "The paved areas of a city, town, or village, typically including the road and sidewalks." },
        // ... (other vocabulary words)
      ],
    },
    {
      title: "HOW TO BE BIG AND STRONG",
      content: "Berto is big and strong. He eats good breakfast before going to school. He drinks milk. He eats vegetables, too.\nHe plays in the yard. These things help Berto become big and strong.",
      questions: [
        {
          question: "Who is the boy in the story?",
          options: [
            "Tito",
            "Berto",
            "Lito",
          ],
          answer: "Berto",
        },
        {
          question: "Which one tells about him?",
          options: [
            "He is big and strong",
            "He is small and thin",
            "He is lazy",
          ],
          answer: "He is big and strong",
        },
        {
          question: "What does Berto eat before he goes to school?",
          options: [
            "A good dinner",
            "A good breakfast",
            "A good supper",
          ],
          answer: "A good breakfast",
        },
        {
          question: "What other things make Berto big and strong?",
          options: [
            "Milk and vegetables",
            "Coffee and candy",
            "Milk and coffee",
          ],
          answer: "Milk and vegetables",
        },
        {
          question: "Where does Berto play?",
          options: [
            "In the house",
            "In the yard",
            "Under the sun",
          ],
          answer: "In the yard",
        },
      ],
      vocabulary: [
        { word: "Solar System", meaning: "The collection of planets and other celestial bodies that orbit the sun." },
        { word: "Energy", meaning: "The ability to do work or cause change." },
        // ... (other vocabulary words)
      ],
    },
    {
      title: "OUR FRIENDS",
      content: "I love to see the birds fly. I love to hear their pretty songs.\nBirds are our friends. They eat harmful insects on our plants.\nThey are very pretty. They make us happy. We must be kind to birds.",
      questions: [
        {
          question: "What do we love to see?",
          options: [
            "Birds",
            "Chickens",
            "Geese",
          ],
          answer: "Birds",
        },
        {
          question: "What do birds do?",
          options: [
            "They talk",
            "They fly",
            "They swim",
          ],
          answer: "They fly",
        },
        {
          question: "What do we love to hear?",
          options: [
            "Birds’ songs",
            "Birds’ talk",
            "Birds’ call",
          ],
          answer: "Birds’ songs",
        },
        {
          question: "What do birds do for us?",
          options: [
            "They make us sad.",
            "They make us happy.",
            "They make us angry.",
          ],
          answer: "They make us happy.",
        },
        {
          question: "How do birds help us?",
          options: [
            "They eat sweet fruits.",
            "They eat harmful insects.",
            "They eat green plants.",
          ],
          answer: "They eat harmful insects.",
        },
      ],
      vocabulary: [
        { word: "Kind", meaning: "Having or showing a friendly, generous, and considerate nature." },
        { word: "Insects", meaning: "Small arthropod animals with a chitinous exoskeleton and three-part body." },
    
      ],
    },
    {
      title: "BUSY CHILDREN",
      content: "It was Saturday. “Let us clean the house,” said Gloria.\n“I will clean the yard,” said Nilo. “I will pull the grass. I will sweep the yard. I will burn the dry leaves.”\n“I will water the plants,” said Lina.",
      questions: [
        {
          question: "What day was it?",
          options: [
            "Monday",
            "Saturday",
            "Friday",
          ],
          answer: "Saturday",
        },
        {
          question: "Who asked that they clean the house?",
          options: [
            "Nilo",
            "Mother",
            "Gloria",
          ],
          answer: "Gloria",
        },
        {
          question: "What will Nilo do?",
          options: [
            "He will clean the garden.",
            "He will help clean the house.",
            "He will clean the yard.",
          ],
          answer: "He will clean the yard.",
        },
        {
          question: "What will Nilo do with the grass?",
          options: [
            "Water them",
            "Plant them",
            "Pull them out",
          ],
          answer: "Pull them out",
        },
        {
          question: "Who will water the plants?",
          options: [
            "Lina",
            "Nilo",
            "Gloria",
          ],
          answer: "Lina",
        },
      ],
      vocabulary: [
        { word: "Burn", meaning: "Cause (a flame or fire) to spread." },
        { word: "Yard", meaning: "An area of ground surrounded by walls or buildings." },
        
      ],
    },
  ];


  const handleProceedToQuiz = () => {
    setShowQuiz(true); // Show the quiz when "Proceed to Quiz" is clicked
  };

  const randomizeQuestionsWithCorrectAnswer = (questions) => {
  const shuffledQuestions = [...questions];
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];

    // Shuffle options within the shuffled question
    shuffledQuestions[i].options = shuffleArray(shuffledQuestions[i].options);
  }

  return shuffledQuestions;
};



const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const handlePassageSelect = (passageIndex) => {
    setSelectedPassage(passageIndex);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
    setShowNextPassageButton(false);
  };

  
  const handleAnswerButtonClick = (option) => {
    setSelectedOption(option);
    const currentPassage = passages[selectedPassage];
    const currentQuestionData = currentPassage.questions[currentQuestion];
    const isCorrect = option === currentQuestionData.answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setShowModal(true);
    setIsCorrectModal(isCorrect);
    setModalText(isCorrect ? 'Correct!' : 'Wrong!');

    setTimeout(() => {
      setShowModal(false);
      setSelectedOption(null);

      if (currentQuestion < currentPassage.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
        setShowNextPassageButton(true);
      }
    }, 1000);
  };
  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
    setShowNextPassageButton(false);
  };

  const handleNextPassage = () => {
    setSelectedPassage(null);
    setShowScore(false);
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
          style={styles.backgroundImage}
        >
          <ScrollView contentContainerStyle={styles.passageListContainer}>
            {passages.map((passage, index) => (
              <TouchableOpacity
                key={index}
                style={styles.passageListItem}
                onPress={() => handlePassageSelect(index)}
              >
                <Text style={styles.passageListItemText}>{passage.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={require('../bgdesign.png')}
          style={styles.backgroundImage}
        >
          {showScore ? (
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>Your Score: {score}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleRetry}>
                  <Text style={styles.buttonText}>Retry Quiz</Text>
                </TouchableOpacity>
                {showNextPassageButton && (
                  <TouchableOpacity
                    style={[styles.button, styles.nextButton]}
                    onPress={handleNextPassage}
                  >
                    <Text style={styles.buttonText}>Next Passage</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ) : (
            <ScrollView contentContainerStyle={styles.quizContainer}>
              <Text style={styles.passageTitle}>
                {passages[selectedPassage].title}
              </Text>
              <Text style={styles.passageContent}>
                {passages[selectedPassage].content}
              </Text>
              <TouchableOpacity
                style={styles.proceedButton}
                onPress={handleProceedToQuiz}
              >
                <Text style={styles.buttonText}>Proceed to Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.vocabButton}
                onPress={openVocabularyModal}
              >
                <Text style={styles.buttonText}>Vocabulary</Text>
              </TouchableOpacity>
              {!showScore && currentQuestion < passages[selectedPassage].questions.length && (
                <React.Fragment>
                 <Text style={styles.question}>
  {passages[selectedPassage].questions[currentQuestion].question}
</Text>
{passages[selectedPassage].questions[currentQuestion].options.map((option, index) => (
  <TouchableOpacity
    key={index}
    style={[
      styles.optionButton,
      selectedOption === option && styles.selectedOptionButton,
    ]}
    onPress={() => handleAnswerButtonClick(option)}
  >
    <Text style={styles.optionText}>{option}</Text>
  </TouchableOpacity>
))}

                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => {
                      setShowModal(false);
                    }}
                  >
                    <View style={styles.modalContainer}>
                      <View
                        style={[
                          styles.modalContent,
                          isCorrectModal ? styles.correctModal : styles.wrongModal,
                        ]}
                      >
                        <Text style={styles.modalText}>{modalText}</Text>
                      </View>
                    </View>
                  </Modal>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showVocabularyModal}
                    onRequestClose={closeVocabularyModal}
                  >
                    <View style={styles.vocabularyModalContainer}>
                      <ScrollView style={styles.vocabularyModalContent}>
                        <Text style={styles.vocabularyModalTitle}>Vocabulary</Text>
                        {passages[selectedPassage].vocabulary.map((vocab, index) => (
                          <View key={index} style={styles.vocabularyItem}>
                            <Text style={styles.vocabularyText}>{vocab.word}</Text>
                            <Text style={styles.vocabularyMeaning}>{vocab.meaning}</Text>
                          </View>
                        ))}
                        <TouchableOpacity
                          style={styles.closeVocabButton}
                          onPress={closeVocabularyModal}
                        >
                          <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                      </ScrollView>
                    </View>
                  </Modal>
                </React.Fragment>
              )}
            </ScrollView>
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
  },
  passageListContainer: {
    padding: 20,
  },
  passageListItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  passageListItemText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
  },
  scoreText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    width: '48%',
  },
  nextButton: {
    backgroundColor: 'green',
  },
  quizContainer: {
    padding: 20,
  },
  passageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  passageContent: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
    padding: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  proceedButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  vocabButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  optionButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: 'lightblue',
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
    backgroundColor: 'green',
  },
  wrongModal: {
    backgroundColor: 'red',
  },
  modalText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  vocabularyModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  vocabularyModalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    maxHeight: '80%',
  },
  vocabularyModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  vocabularyItem: {
    marginBottom: 10,
  },
  vocabularyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  vocabularyMeaning: {
    fontSize: 16,
    color: 'black',
  },
  closeVocabButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
});

export default Grade6DifficultQuiz;
