import React from 'react';
import {View, Text, Button, Alert, Platform} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert title',
      'This is message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('PRESS'),
          style: 'destructive',
        },
        {
          text: 'Ok',
          onPress: () => console.log('press'),
        },
      ],
      {cancelable: true, onDismiss: () => console.log('out press')},
    );
  };

  const showPromptiOS = () => {
    if (Platform.OS == 'android') {
      Alert.alert(
        'Information',
        'Prompt is available only iOS',
        [
          {
            text: 'Ok',
          },
        ],
        {cancelable: true, onDismiss: () => console.log('out press')},
      );
    }
    Alert.prompt(
      'Prompt is available only iOS',
      'This is message',
      (valor: string) => console.log('Info: ', valor),
      'login-password', // Show two inputs, username and password
      'Default Text',
      'number-pad', //Keyboard
    );
  };
  const showPrompt = () => {
    //Prompt de libreria de terceros, funciona tanto para Android como para iOS
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'login-password',
        cancelable: false,
        defaultValue: '',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Show Alert Prompt iOS" onPress={showPromptiOS} />
      <View style={{height: 10}} />
      <Button title="Show Alert Prompt" onPress={showPrompt} />
    </View>
  );
};
