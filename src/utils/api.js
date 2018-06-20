import { RSAA, getJSON, ApiError } from 'redux-api-middleware';

const defaultErrorHandler = payload => {
  if (__DEV__) {
    console.error('API error', payload);
  }

  return null;
};

export const invoke = (api, options = {}) => {
  const reduxAction = Object.assign({}, api, {
    method: api.method || 'GET',
  });

  let errorAction = reduxAction.types[2];
  errorAction =
    typeof errorAction === 'string'
      ? { type: errorAction }
      : errorAction;

  if (typeof errorAction.payload === 'undefined') {
    const errorHandler =
      typeof options.errorHandler === 'undefined'
        ? defaultErrorHandler
        : options.errorHandler;

    errorAction.payload = (action, state, res) =>
      getJSON(res).then(json => {
        const error = new ApiError(res.status, res.statusText, json);
        if (errorHandler) {
          errorHandler(error);
        }
        return error;
      });
    reduxAction.types[2] = errorAction;
  }

  return { [RSAA]: reduxAction };
};
