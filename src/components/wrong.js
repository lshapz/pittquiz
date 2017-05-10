import React from 'react'

const Wrong = (props) => {


return (
  <div>
  <h2>You were incorrect!</h2> 
  <h3>{props.q.title} was actually released in {props.q.answers.filter(item=>{return item.correct})[0].content}.</h3>
      <a href="">Play Again</a>
  </div>
  )

}


export default Wrong