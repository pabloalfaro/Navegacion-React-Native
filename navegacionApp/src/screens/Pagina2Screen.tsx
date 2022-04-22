import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View>
      <Text style={styles.title}>Paginas2Screen</Text>
      <Button
        title="Ir a la página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
