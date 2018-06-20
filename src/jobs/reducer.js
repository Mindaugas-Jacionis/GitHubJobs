import * as types from './actionTypes';

const INITIAL = {
  fetching: false,
  data: [],
  error: null
};

export default (state = INITIAL, { payload, type }) => {
  switch (type) {
    case types.SAMPLE_ACTION:
      const { data } = state;
      return { ...state, data: [...data, `Sample Data #${data.length}`] };

    case types.GET_JOBS:
      console.log('GET_JOBS');
      return state;
    case types.GET_JOBS_SUCCESS:
      console.log('GET_JOBS_SUCCESS');
      return state;
    case types.GET_JOBS_FAILURE:
      console.log('GET_JOBS_FAILURE');
      return state;
    default:
      return state;
  }
};
