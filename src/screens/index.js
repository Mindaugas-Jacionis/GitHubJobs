import { Navigation } from 'react-native-navigation';

import { NAVIGATION } from '../constants';
import { TestScreen } from './test';

export const registerScreens = (store, Provider) => {
  Navigation.registerComponent(`${NAVIGATION}.TestScreen`, () => TestScreen, store, Provider)
};
