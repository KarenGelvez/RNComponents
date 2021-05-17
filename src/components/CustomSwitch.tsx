import React, {useState} from 'react';
import {View, Text, Switch, Platform} from 'react-native';

interface IProps {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: IProps) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#d9d9db', true: '#5856d6'}}
      thumbColor={Platform.OS == 'android' ? '#5856d6' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
