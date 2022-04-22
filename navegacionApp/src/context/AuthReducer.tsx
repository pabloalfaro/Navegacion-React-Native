import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'not_yet',
      };
    case 'changeIcon':
      return {
        ...state,
        favouriteIcon: action.payload,
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
      };
    case 'changeName':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
