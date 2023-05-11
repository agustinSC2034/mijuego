import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Card, Header, NumberContainer } from '../../components/index';
import React, { useState } from 'react';

import { styles } from './styles';
import { theme } from '../../constants';
import useOrientation from '../../hooks/useOrientation';

const isAndroid = Platform.OS === 'android';

const StartGame = ({ onStartGame }) => {
  const [numberOption, setNumberOption] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const { isPortrait } = useOrientation();

  const onHandlerChangeText = (text) => {
    setNumberOption(text.replace(/[^0-9]/g, ''));
  };

  const onHandlerConfirm = () => {
    const chosenNumber = Number(numberOption);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: () => setNumberOption('') },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setNumberOption('');
    }
  };

  const onHandlerReset = () => {
    setNumberOption('');
    setConfirmed(false);
    setSelectedNumber(null);
  };

  const onHandlerStartGame = () => {
    onStartGame(selectedNumber);
  };

  const Confirmed = () =>
    confirmed ? (
      <Card style={isPortrait ? styles.confirmedContainer : styles.confirmedContainerLandscape}>
        <Text style={styles.confirmedTitle}>Numero elegido</Text>
        <NumberContainer number={selectedNumber} />
        <Button title="Empezar el juego" onPress={onHandlerStartGame} color={theme.colors.primary} />
      </Card>
    ) : null;

  return (
    <KeyboardAvoidingView
      behavior={isAndroid ? 'padding' : 'height'}
      style={styles.containerKeyboardAvoidingView}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>Empezar el juego</Text>
            <Card style={isPortrait ? styles.inputContainer : styles.inputContainerLandscape}>
              <Text style={styles.label}>Escribe un numero</Text>
              <TextInput
                placeholder="0"
                style={styles.input}
                keyboardType="number-pad"
                maxLength={2}
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit
                onChangeText={onHandlerChangeText}
                value={numberOption}
              />
              <View style={styles.buttonContainer}>
                <Button title="Reiniciar" onPress={onHandlerReset} color={theme.colors.secondary} />
                <Button
                  title="Confirmar"
                  onPress={onHandlerConfirm}
                  color={theme.colors.primary}
                  disabled={numberOption === ''}
                />
              </View>
            </Card>
            <Confirmed />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGame;