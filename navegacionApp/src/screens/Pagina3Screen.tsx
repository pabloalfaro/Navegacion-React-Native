import React from 'react';
import {Button, Text, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View>
      <Text style={styles.title}>Paginas3Screen</Text>
      <Button title="Volver" onPress={() => navigation.pop()} />
      <Button title="Inicio" onPress={() => navigation.popToTop()} />
    </View>
  );
};
