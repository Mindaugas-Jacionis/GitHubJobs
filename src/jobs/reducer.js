import * as types from './actionTypes';

const INITIAL = {
  fetching: false,
  data: [],
  error: null,
  jobs: [],
};

export default (state = INITIAL, { payload, type }) => {
  switch (type) {
    case types.SAMPLE_ACTION:
      return {
        ...state,
        data: [...state.data, `Sample Data #${state.data.length}`],
      };

    case types.GET_JOBS:
      return { ...state, fetching: true, error: null };
    case types.GET_JOBS_SUCCESS:
      return { ...state, jobs: payload, fetching: false };
    case types.GET_JOBS_FAILURE:
      return { ...state, error: payload, fetching: false };
    default:
      return state;
  }
};
