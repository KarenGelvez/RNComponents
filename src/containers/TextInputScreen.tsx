import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {styles as s} from '../theme/appTheme';

interface IState {
  name: string;
  email: string;
  phone: string;
  isSubscribed: boolean;
}

export const TextInputScreen = () => {
  const form = {
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  };
  const {onChange, form: data} = useForm(form);
  const text = JSON.stringify(data, null, 3);
  /*const onChange = (value: string | boolean, field: keyof IState) => {
    setForm({
      ...form,
      [field]: value,
    });
  }; */
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={s.globalMargin}>
          <HeaderTitle title="TextInputs" />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
            keyboardAppearance="dark" //Only iOS
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
            keyboardAppearance="light" //Only iOS
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su telefono"
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
          <View style={styles.wrapper}>
            <Text style={styles.text}>Subscribed</Text>
            <CustomSwitch
              isOn={form.isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>
          <HeaderTitle title={text} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 25,
  },
});
