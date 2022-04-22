import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactScreen</Text>

      <MostrarLogin />
    </View>
  );
};

const MostrarLogin = () => {
  const {
    signIn,
    logout,
    authState: {isLoggedIn, username},
  } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <>
        <Text>Estas logeado como {username}</Text>
        <Button title="Logout" onPress={logout}></Button>
      </>
    );
  } else {
    return <Button title="Sign In" onPress={signIn}></Button>;
  }
};
