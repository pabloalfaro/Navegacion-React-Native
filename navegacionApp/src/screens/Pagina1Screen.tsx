import React from 'react';

import {styles} from '../theme/appTheme';

import {Button, Text, View, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a la página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      {/* <Button
        title="Ir persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      /> */}

      <Text style={{marginVertical: 20}}>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text>
            <Icon name="man-outline" size={22} color="white" />
          </Text>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Text>
            <Icon name="woman-outline" size={22} color="white" />
          </Text>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
