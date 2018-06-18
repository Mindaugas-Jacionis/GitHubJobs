import { Navigation } from 'react-native-navigation';

import { NAVIGATION } from '../constants';
import reduxHoc from './reduxHoc'
import { TestScreen } from './test';

export const registerScreens = (store) => {
  reduxHoc(`${NAVIGATION}.TestScreen`, TestScreen, store)
  // Navigation.registerComponent(
  //   `${NAVIGATION}.TestScreen`, () => reduxHoc(TestScreen, store)
  // );
};
