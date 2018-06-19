import { applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

const middlewares = [thunk, apiMiddleware];

export default applyMiddleware(...middlewares)
