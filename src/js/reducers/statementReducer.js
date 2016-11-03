export default function reducer(state={
    statement: {
      id: null,
      title: null,
      statement: null,
      location: null, //-3 diagree,-2 Neutral,-1 agree
    },
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_STATEMENT_LOCATION": {
        return {
          ...state,
          statement: {...state.statement, location: action.payload},
        }
      }
    }

    return state
}
