export function setStatementLocation(id,location) {
  return {
    type: 'SET_STATEMENT_LOCATION',
    payload: {
      id,
      location,
    },
  }
}

// export function fetchStatements() {
//   return {
//     type: "FETCH_STATEMENT",
//     payload: {
//       {
//         title: "Q1",
//         statement: "Test Statement",
//       },
//       {
//         title: "Q2",
//         statement: "Test2 Statement",
//       },
//     }
//   }
// }
