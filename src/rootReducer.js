export default(state = {actor: "", questions: {}}, action) => {
  switch (action.type) {
    case 'ACTOR_NAME':
      return Object.assign({}, state, {actor: action.payload})
    case 'ACTOR_QS':
      return Object.assign({}, state, {questions: action.payload})
    default:
      return state
  }
}

export const findActor = (actor) => ({type: 'ACTOR_NAME', payload: actor})
export const getQuestions = (qs) => ({type: 'ACTOR_QS', payload: qs})
