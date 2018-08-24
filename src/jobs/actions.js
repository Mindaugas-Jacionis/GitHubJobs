import { invoke } from '~/utils';
import * as types from './actionTypes';

export const sampleAction = data => ({
  type: types.SAMPLE_ACTION,
  payload: data,
});

export const getJobs = (keyword = 'javascript') =>
  invoke({
    endpoint: `https://jobs.github.com/positions.json?search=${keyword}`,
    types: [types.GET_JOBS, types.GET_JOBS_SUCCESS, types.GET_JOBS_FAILURE],
  });
