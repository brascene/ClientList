import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import { StackNavigator } from 'react-navigation'

import Home from '../../components/home'
import ClientProfile from '../../components/SingleClient'
import AddClient from '../../components/Addclient'

export const ModalStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    path: 'client/:client',
    screen: ClientProfile,
  },
  AddClient: {
    path: 'addClient',
    screen: AddClient
  }
});

const initialState = ModalStack.router.getStateForAction(ModalStack.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialState, action) => {
  const nextState = ModalStack.router.getStateForAction(action, state);
  return nextState || state;
};

export const reducers = combineReducers({
  nav: navReducer,
  profileReducer
})
