import { combineReducers } from 'redux';

import jobs from '../../jobs';

const reducers = combineReducers({
  [jobs.constants.NAME]: jobs.reducer
});

export default reducers;
