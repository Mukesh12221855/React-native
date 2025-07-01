import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Keyboard,
  Animated,
  ImageBackground,
} from 'react-native';

const NumberGuessScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [confirmedNumber, setConfirmedNumber] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [resultMessage, setResultMessage] = useState('');
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    const generatedNumber = Math.floor(Math.random() * 99) + 1;
    setRandomNumber(generatedNumber);
    console.log('Random Number:', generatedNumber);

    const loopAnimation = () => {
      animation.setValue(0);
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }).start(() => loopAnimation());
    };
    loopAnimation();
  }, [animation]);

  const numberInputHandler = inputText => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, '').slice(0, 2));
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
    setConfirmedNumber(null);
    setResultMessage('');
    const newRandom = Math.floor(Math.random() * 99) + 1;
    setRandomNumber(newRandom);
    console.log('New Random Number:', newRandom);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Please enter a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    setConfirmedNumber(chosenNumber);
    Keyboard.dismiss();

    if (chosenNumber === randomNumber) {
      setResultMessage('✅ Correct! You guessed the number!');
    } else if (chosenNumber < randomNumber) {
      setResultMessage('🔻 Too low! Try a higher number.');
    } else {
      setResultMessage('🔺 Too high! Try a lower number.');
    }

    setEnteredNumber('');
  };

  return (
    <Animated.ImageBackground
      source={require('./assets/bg.jpg')}
      style={[styles.background, { opacity: animation }]}
      resizeMode="cover"
    >
      <View style={styles.screen}>
        <Text style={styles.title}>🎯 Start a New Game!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter a Number (1-99)</Text>
          <TextInput
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInputHandler} color="#C70039" />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color="#4CAF50" />
            </View>
          </View>
        </View>

        {confirmedNumber && (
          <View style={styles.summaryContainer}>
            <Text style={styles.confirmedText}>You guessed: {confirmedNumber}</Text>
            <Text style={styles.resultText}>{resultMessage}</Text>
          </View>
        )}
      </View>
    </Animated.ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  title: {
    fontSize: 28,
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  inputContainer: {
    width: '85%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 25,
    borderRadius: 20,
    borderColor: '#87CEFA',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  input: {
    width: '60%',
    height: 50,
    textAlign: 'center',
    fontSize: 30,
    borderBottomColor: '#1E90FF',
    borderBottomWidth: 3,
    color: '#1E90FF',
    fontWeight: 'bold',
    marginVertical: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  button: {
    width: '45%',
  },
  summaryContainer: {
    marginTop: 30,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(240, 255, 255, 0.9)',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  confirmedText: {
    fontSize: 22,
    color: '#1E90FF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    color: '#333',
  },
});

export default NumberGuessScreen;
