import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

// const middleware = applyMiddleware(promise(), thunk, logger())

const initialState = {
  statements: [
    {id:1, title:'Q1', statement: 'test statement1', location_id: null},
  ]
};

export default createStore(reducer, initialState)
