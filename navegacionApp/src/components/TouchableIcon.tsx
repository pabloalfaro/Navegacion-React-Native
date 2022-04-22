import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props {
  name: string;
}

export const TouchableIcon = ({name}: Props) => {
  const {changeIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeIcon(name)}>
      <Icon name={name} size={80} color={colores.primary} />
    </TouchableOpacity>
  );
};
