import React from 'react'
import questions from '../assets/questionmaker'
import Question from './question'
import Right from './right'
import Wrong from './wrong'

class Quiz extends React.Component {

  constructor(props){
    super(props)
   var quest = questions
   var redneredQuests = quest.map(item=>{
    return <Question item={item} handleSubmit={this.handleSubmit.bind(this)}/>
  })
   var showMe = redneredQuests[Math.floor(Math.random()*redneredQuests.length)]
    this.state = {
      started: true,
      won: false,
      showMe: showMe
    }

  }

  handleSubmit(event){
    event.preventDefault()
    
    let selected = Array.from(event.target.elements).filter(item=>{
      return item.checked
    })[0].value
    let quest = questions 
    let correctAnswer
    let title = event.target.title
    let it 
    quest.forEach(item=>{
      if (item.title === title){
        it = item}
    })
    it.answers.forEach(item=>{
        if (item.correct){
          correctAnswer = item.content
        }
    })

    if (selected === correctAnswer) {
      this.setState({won: true, started: false})
    } else {
      this.setState({won: false, started: false})
    }

  }



render(){

  // let quest = questions
  // let redneredQuests = quest.map(item=>{
  //   return <Question item={item} handleSubmit={this.handleSubmit.bind(this)}/>
  // })
  // let showMe = redneredQuests[Math.floor(Math.random()*redneredQuests.length)]
  // let question = quest.filter(item=>{return item.title === showMe.props.item.title})
  let show
  
    if (this.state.started) {
      show = this.state.showMe
    } else if (!this.state.started && this.state.won) {
      show = <Right q={this.state.showMe.props.item} />
    } else if (!this.state.started && !this.state.won) {
      show = <Wrong q={this.state.showMe.props.item} />
    } 
 let baseurl = "http://image.tmdb.org/t/p/w185/"

  return (<div>
      <p><img src={baseurl + this.state.showMe.props.item.poster} /></p>

    {show} 
    

  </div>)
  

}



}

export default Quiz