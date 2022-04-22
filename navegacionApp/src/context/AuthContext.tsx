import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

// Interface de los datos
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favouriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favouriteIcon: undefined,
};

// Las propiedades y métodos que se van a exponer
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeIcon: (iconName: string) => void;
  logout: () => void;
  changeName: (userName: string) => void;
}

// Definición del contexto
export const AuthContext = createContext({} as AuthContextProps);

// Proveedor de estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeIcon = (iconName: string) => {
    dispatch({type: 'changeIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeName = (userName: string) => {
    dispatch({type: 'changeName', payload: userName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeIcon,
        logout,
        changeName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
