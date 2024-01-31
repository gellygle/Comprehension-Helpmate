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

const Grade5DifficultQuiz = () => {
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
  const [timer, setTimer] = useState(10);

  const passagesModerate = [
  {
    title: 'GREAT BIG FOX',
    content: 'A great big fox saw Jim crying. He asked: Sweet boy! Why are you crying? Jim: Look there! I cannot get my three goats out of that carrot field. Fox: Don’t cry! I will get your goats. The fox ran round and round, after the three goats. But no! The goats did not come. The fox sat down with Jim and cried. Boo! Boo!',
    image: require('./IMAGE/greatfox.png'),
    questions: [
      {
        question: 'How many goats were there?',
        options: ['four', 'three', 'two'],
        answer: 'three',
      },
      {
        question: 'What animal saw Jim crying?',
        options: ['a big fox', 'a little rabbit', 'a happy dog'],
        answer: 'a big fox',
      },
      {
        question: 'Where are Jim’s goats?',
        options: ['in the flower garden', 'in the forest', 'in the carrot garden'],
        answer: 'in the carrot garden',
      },
      {
        question: 'Why did the fox sit down with Jim and cry?',
        options: ['because the goats did not come', 'because the goats went to the forest', 'because the goats did not play with them'],
        answer: 'because the goats did not come',
      },
      {
        question: 'How did the fox help Jim?',
        options: ['The fox ran round and round.', 'The fox sat down and laughed with Jim.', 'The fox cried with Jim.'],
        answer: 'The fox cried with Jim.',
      },
    ],
    vocabulary: [
      { word: 'Cherished', meaning: 'Held dear; valued highly.' },
      { word: 'Reluctantly', meaning: 'With hesitation or unwillingness.' },
    ],
  },
  {
    title: 'JOSE AND HIS PET DOG',
    content: 'Jose had a beloved pet dog that he cherished. Despite his neighbor\'s offer of 500 pesos for the dog, Jose refused to sell it because it was his favorite companion. Unfortunately, when his baby sister fell seriously ill, Jose\'s mother needed money for the doctor. Reluctantly, Jose decided to sell his cherished pet dog to his neighbor, knowing it would help his family in their time of need.',
    image: require('./IMAGE/joedog.png'),
    questions: [
      {
        question: 'Why did Jose refuse to sell his pet dog to his neighbor?',
        options: ['He didn\'t like his neighbor', 'The neighbor offered too little money', 'The dog was his favorite companion', 'The dog was sick and needed his care'],
        answer: 'The dog was his favorite companion',
      },
      {
        question: 'What caused Jose to reconsider selling his dog?',
        options: ['His neighbor offered more money', 'His baby sister fell seriously ill', 'He found another source of income', 'His dog became aggressive'],
        answer: 'His baby sister fell seriously ill',
      },
      {
        question: 'What was the neighbor\'s offer for Jose\'s dog?',
        options: ['100 pesos', '250 pesos', '500 pesos', '1000 pesos'],
        answer: '500 pesos',
      },
      {
        question: 'Why did Jose decide to sell his cherished pet dog?',
        options: ['He didn\'t want the dog anymore', 'The neighbor insisted on buying it', 'He wanted to buy a new dog instead', 'His family needed money for the doctor'],
        answer: 'His family needed money for the doctor',
      },
      {
        question: 'How did Jose feel about selling his pet dog?',
        options: ['Relieved', 'Excited', 'Heartbroken', 'Indifferent'],
        answer: 'Heartbroken',
      },
    ],
    vocabulary: [
      { word: 'Cherished', meaning: 'Held dear; valued highly.' },
      { word: 'Reluctantly', meaning: 'With hesitation or unwillingness.' },
    ],
  },
  {
    title: 'PICNIC IN THE PARK',
    content: 'Mom and I decided to have a picnic in the park. I packed a picnic basket with snacks, including chopped apples. As we walked to the park, we met Pam and her dog Mack. I gave Mack a hug, and he wagged his tail. Mack got excited and licked my face, making us all laugh and smile.',
    image: require('./IMAGE/picnic.png'),
    questions: [
      {
        question: 'What did Mom and I pack in the picnic basket?',
        options: ['Chopped apples', 'Sandwiches', 'Bottled water', 'All of the above'],
        answer: 'All of the above',
      },
      {
        question: 'Who did we meet in the park?',
        options: ['Pam\'s cat', 'Pam\'s dog Mack', 'Pam\'s friend Mark', 'Pam\'s sibling'],
        answer: 'Pam\'s dog Mack',
      },
      {
        question: 'How did Mack react when I hugged him?',
        options: ['He growled', 'He wagged his tail', 'He ran away', 'He barked loudly'],
        answer: 'He wagged his tail',
      },
      {
        question: 'What did Mack do after wagging his tail?',
        options: ['He jumped up and licked my face', 'He rolled on the grass', 'He sat down and waited', 'He started barking at other dogs'],
        answer: 'He jumped up and licked my face',
      },
      {
        question: 'How did we react to Mack licking my face?',
        options: ['We got scared', 'We cried', 'We all laughed and grinned', 'We scolded Mack'],
        answer: 'We all laughed and grinned',
      },
    ],
    vocabulary: [
      { word: 'Picnic basket', meaning: 'A container used to carry food for a picnic.' },
      { word: 'Chopped apples', meaning: 'Apples that have been cut into small pieces.' },
    ],
  },
  {
    title: 'FISHERMAN',
    content: 'Pio considered himself a fine fisherman. He stood on the riverbank as he held his fishing line. He has the patience only a fisherman knew. His heart beat faster as he felt a tug on his line. He was excited as he planted his feet firmly on the ground. He gave a big pull, expecting a big fish. Disappointment clouded his face as he stared at his catch. It was a pile of garbage.',
    image: require('./IMAGE/fishermen.png'),
    questions: [
      {
        question: 'Who is Pio?',
        options: ['A chef', 'A writer', 'A fisherman'],
        answer: 'A fisherman',
      },
      {
        question: 'What did Pio feel when he felt a tug on his fishing line?',
        options: ['Fear', 'Excitement', 'Disappointment'],
        answer: 'Excitement',
      },
      {
        question: 'What did Pio catch in the end?',
        options: ['A big fish', 'A pile of garbage', 'A shoe'],
        answer: 'A pile of garbage',
      },
      {
        question: 'What did Pio do when he felt a tug on his line?',
        options: ['He ran away', 'He gave up', 'He pulled his line'],
        answer: 'He pulled his line',
      },
      {
        question: 'How did Pio feel after catching the garbage?',
        options: ['Happy', 'Excited', 'Disappointed'],
        answer: 'Disappointed',
      },
    ],
    vocabulary: [
      { word: 'Patience', meaning: 'The ability to endure waiting, delay, or provocation without becoming annoyed or upset.' },
      { word: 'Disappointment', meaning: 'Feeling of sadness or displeasure caused by the non-fulfillment of one\'s hopes or expectations.' },
    ],
  }
   
  ];

  useEffect(() => {
    let timerInterval;
    if (showQuiz && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [showQuiz, timer]);

  useEffect(() => {
    if (showQuiz && timer === 0) {
      handleNextQuestion();
    }
  }, [timer, showQuiz]);

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

    setSelectedOption(option); // Set selected option for the current question

    setTimeout(() => {
      setShowModal(false);
      setIsCorrectModal(true); // Reset isCorrectModal state
      if (currentQuestion < currentPassage.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setTimer(10);
        setSelectedOption(null); // Reset selected option for the next question
      } else {
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
      setTimer(10);
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
    setTimer(10);
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
                  setTimer(10);
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
            // Score Display Section
            <View style={styles.scoreContainer}>
              <Text
                style={
                  styles.scoreText
                }>{`Your Score: ${score}/${passages[selectedPassage].questions.length}`}</Text>
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
export default Grade5DifficultQuiz;
