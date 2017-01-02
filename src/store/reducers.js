import C from '../constants'
import { combineReducers } from 'redux'

export const allStatement = (state=[], action) => {

  switch(action.type) {

    case C.SORT_STATEMENT :

      return
         [
           ...state,
           action.payload
         ]

    case C.MOVE_STATEMENT :

      return
         [
           ...state,
           action.payload
         ]

    default:
      return state
  }

}

export default combineReducers({
  allStatement
})
