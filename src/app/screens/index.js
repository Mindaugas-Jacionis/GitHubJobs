import { Navigation } from 'react-native-navigation';

import { NAVIGATION } from '../../constants';
import reduxHoc from '../hoc/reduxHoc'
import { TestScreen } from './test';

export const registerScreens = (store) => {
  reduxHoc(`${NAVIGATION}.TestScreen`, TestScreen, store);
};