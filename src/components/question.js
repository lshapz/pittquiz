import React from 'react'
import questions from '../assets/questionmaker'

const Question = (props) => {


return(
    <span>
    {props.item.question}
    <form onSubmit={props.handleSubmit} title={props.item.title} >
      <p><input type="radio" key={props.item.answers[0].content} value={props.item.answers[0].content} />{props.item.answers[0].content}</p>
      <p><input type="radio" key={props.item.answers[1].content} value={props.item.answers[1].content} />{props.item.answers[1].content}</p>
      <p><input type="radio" key={props.item.answers[2].content} value={props.item.answers[2].content} />{props.item.answers[2].content}</p>
      <input type="submit" />
    </form>
    </span>
    


)



}

export default Question


