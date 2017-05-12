import React from 'react'
import Question from './question'
import Right from './right'
import Wrong from './wrong'
import SearchBar from '../assets/searchbar'
import {connect, mapStateToProps} from 'react-redux'
import {findActor, getQuestions} from '../rootReducer.js'
import getData from '../assets/questionmaker'

class Quiz extends React.Component {

  constructor(props){
  super(props)
   var quest = getData(this.props.actor)
   this.props.getQuestions(quest)
   var redneredQuests = quest.map(item=>{
    return <Question item={item} handleSubmit={this.handleQuestionSubmit.bind(this)}/>
  })
   var showMe = redneredQuests[Math.floor(Math.random()*redneredQuests.length)]
    this.state = {
      started: false,
      ended: false,
      won: false,
      showMe: showMe
    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  handleQuestionSubmit(event){
    event.preventDefault()
    
    let selected = Array.from(event.target.elements).filter(item=>{
      return item.checked
    })[0].value
    let quest = this.props.qs 
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
      this.setState({won: true, ended: true})
    } else {
      this.setState({won: false, ended: true})
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
    if (!this.state.started) {
      show = <SearchBar handleSubmit={this.handleSearchSubmit} /> 
    } else if (this.state.started) {
      show = this.state.showMe
    } else if (this.state.ended && this.state.won) {
      show = <Right q={this.state.showMe.props.item} />
    } else if (this.state.ended && !this.state.won) {
      show = <Wrong q={this.state.showMe.props.item} />
    } 
 let baseurl = "http://image.tmdb.org/t/p/w185/"

  return (<div>
      <p><img src={baseurl + this.state.showMe.props.item.poster} /></p>

    {show} 
    

  </div>)
  

}



}

function mapStateToProps(state){
  return {actor: state.actor, qs: state.qs}
}

export default connect(mapStateToProps, {getQuestions})(Quiz)