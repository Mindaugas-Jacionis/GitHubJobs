import { RSAA } from 'redux-api-middleware';
import * as types from './actionTypes';
import { invoke } from '../utils';

export const sampleAction = data => ({
  type: types.SAMPLE_ACTION,
  payload: data,
});

export const fetchJobs = (keyword = 'javascript') => invoke({
  endpoint: `https://jobs.github.com/positions.json?search=${keyword}`,
  types: [types.GET_JOBS, types.GET_JOBS_SUCCESS, types.GET_JOBS_FAILURE],
});
