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
    default:
      return state;
  }
};
