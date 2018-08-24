import { NAVIGATION } from '~/constants';
import reduxHoc from '~/app/hoc/reduxHoc';
import { TestScreen } from './test';
import Search from './Search';

export const registerScreens = store => {
  reduxHoc(`${NAVIGATION}.TestScreen`, TestScreen, store);
  reduxHoc(`${NAVIGATION}.Search`, Search, store);
};
