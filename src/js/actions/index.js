// let nextTodoId = 0
// export const addTodo = (text) => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })
//
// export const setVisibilityFilter = (filter) => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

export const toggleLocation = (id,location_id) => ({
  type: 'TOGGLE_LOCATION',
  id,
  location_id,
})

export const fetchLocationNullStatement = () => ({
  type: 'FETCH_LOCATION_NULL',
})
