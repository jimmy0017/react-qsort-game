const statement = (state, action) => {
  switch (action.type) {
    // case 'ADD_TODO':
    //   return {
    //     id: action.id,
    //     text: action.text,
    //     completed: false
    //   }
    case 'TOGGLE_LOCATION':
      // if (state.id !== action.id) {
      //   return state
      // }

      return {
        ...state,
        location_id: action.location_id
      }
    default:
      return state
  }
}

const statements = (state = [], action) => {
  switch (action.type) {
    // case 'ADD_TODO':
    //   return [
    //     ...state,
    //     todo(undefined, action)
    //   ]
    // case 'TOGGLE_TODO':
    //   return state.map(t =>
    //     todo(t, action)
    //   )
    // case "TOGGLE_LOCATION":
    //   return state.map(t =>
    //     statement(t, action)
    //   )
    case 'FETCH_LOCATION_NULL':
      return state.filter(t => t.location_id ==null)
    default:
      return state
  }
}

export default statements
