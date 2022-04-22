import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {Image, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import {styles, colores} from '../theme/appTheme';
import {createStackNavigator} from '@react-navigation/stack';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();
// const SettingsStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Settings Screen"
//         component={SettingsScreen}></Stack.Screen>
//     </Stack.Navigator>
//   );
// };

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      {/* <Drawer.Screen name="SettingsScreen" component={SettingsStackScreen} /> */}
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.seekpng.com/png/full/110-1100707_person-avatar-placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('Tabs')}>
          <Text>
            <Icon name="compass-outline" size={25} color="grey" />
          </Text>
          <Text style={styles.menuTexto}> Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text>
            <Icon name="settings-outline" size={25} color="grey" />
          </Text>
          <Text style={styles.menuTexto}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
