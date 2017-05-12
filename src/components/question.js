import React from 'react'
import questions from '../assets/questionmaker'

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null
  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const Question = (props) => {
  
  let answers = shuffle(props.item.answers)
    return(
        <span>
        {props.item.question}
        <form onSubmit={props.handleSubmit} title={props.item.title} >
          <p><input type="radio" key={answers[0].content} value={answers[0].content} />{answers[0].content}</p>
          <p><input type="radio" key={answers[1].content} value={answers[1].content} />{answers[1].content}</p>
          <p><input type="radio" key={answers[2].content} value={answers[2].content} />{answers[2].content}</p>
          <input type="submit" />
        </form>
        </span>
    )



}

export default Question


