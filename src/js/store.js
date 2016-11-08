import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

// const middleware = applyMiddleware(promise(), thunk, logger())

const initialState = {
  statements: [
    {id:1, title:'Q1', statement: 'test statement1', location_id: null},
    {id:2, title:'Q2', statement: 'test statement1', location_id: null},
    {id:3, title:'Q3', statement: 'test statement1', location_id: null},
    {id:4, title:'Q4', statement: 'test statement1', location_id: null},
    {id:5, title:'Q5', statement: 'test statement1', location_id: null},
    {id:6, title:'Q6', statement: 'test statement1', location_id: null},
    {id:7, title:'Q7', statement: 'test statement1', location_id: null},
    {id:8, title:'Q8', statement: 'test statement1', location_id: null},
    {id:9, title:'Q9', statement: 'test statement1', location_id: null},
    {id:10, title:'Q10', statement: 'test statement1', location_id: null},
    {id:11, title:'Q11', statement: 'test statement1', location_id: null},
    {id:12, title:'Q12', statement: 'test statement1', location_id: null},
    {id:13, title:'Q13', statement: 'test statement1', location_id: null},
    {id:14, title:'Q14', statement: 'test statement1', location_id: null},
    {id:15, title:'Q15', statement: 'test statement1', location_id: null},
    {id:16, title:'Q16', statement: 'test statement1', location_id: null},
    {id:17, title:'Q17', statement: 'test statement1', location_id: null},
    {id:18, title:'Q18', statement: 'test statement1', location_id: null},
    {id:19, title:'Q19', statement: 'test statement1', location_id: null},
    {id:20, title:'Q20', statement: 'test statement1', location_id: null},
    {id:21, title:'Q21', statement: 'test statement1', location_id: null},
    {id:22, title:'Q22', statement: 'test statement1', location_id: null},
    {id:23, title:'Q23', statement: 'test statement1', location_id: null},
    {id:24, title:'Q24', statement: 'test statement1', location_id: null},
    {id:25, title:'Q25', statement: 'test statement1', location_id: null},
    {id:26, title:'Q26', statement: 'test statement1', location_id: null},
    {id:27, title:'Q27', statement: 'test statement1', location_id: null},
    {id:28, title:'Q28', statement: 'test statement1', location_id: null},
    {id:29, title:'Q29', statement: 'test statement1', location_id: null},
    {id:30, title:'Q30', statement: 'test statement1', location_id: null},
    {id:31, title:'Q31', statement: 'test statement1', location_id: null},
    {id:32, title:'Q32', statement: 'test statement1', location_id: null},
    {id:33, title:'Q33', statement: 'test statement1', location_id: null},
    {id:34, title:'Q34', statement: 'test statement1', location_id: null},
    {id:35, title:'Q35', statement: 'test statement1', location_id: null},
    {id:36, title:'Q36', statement: 'test statement1', location_id: null},


  ]
};

export default createStore(reducer, initialState)
