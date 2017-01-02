import C from '../constants'

export const toggleLocation = (id,location_id) => ({
  type: 'TOGGLE_LOCATION',
  id,
  location_id,
})

export const fetchLocationNullStatement = () => ({
  type: 'FETCH_LOCATION_NULL',
})
