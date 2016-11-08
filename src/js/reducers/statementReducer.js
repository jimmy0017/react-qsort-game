export default function reducer(state={
    statements: [
      {
        id: 1,
        title: 'Q1',
        statement: 'Test Statement1',
        location: null, //-3 diagree,-2 Neutral,-1 agree
      },
      {
        id: 2,
        title: 'Q2',
        statement: 'Test Statement2',
        location: null, //-3 diagree,-2 Neutral,-1 agree
      },
    ],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      // case "FETCH_STATEMENTS": {
      //   return {...state, fetching: true}
      // }
      // case "FETCH_STATEMENTS_REJECTED": {
      //   return {...state, fetching: false, error: action.payload}
      // }
      // case "FETCH_STATEMENTS_FULFILLED": {
      //   return {
      //     ...state,
      //     fetching: false,
      //     fetched: true,
      //     statements: action.payload,
      //   }
      // }

      case "SET_STATEMENT_LOCATION": {

        const { id, location } = action.payload
        const newStatements = [...state.statements]
        const statementToUpdate = newStatements.findIndex(statement => statement.id === id)
        newStatements[statementToUpdate] = action.payload;

        return {
          ...state,
          statement: {...state.statement, location: action.payload},
        }
      }
    }

    return state
}
