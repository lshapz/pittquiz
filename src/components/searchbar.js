// import React from 'react';
// import {connect} from 'react-redux'
// import findActor from '../ducks/reducer.js'

// class SearchBar extends React.Component{
// // const SearchBar = (props) => {
//   constructor(props){
//     super(props)
//   }

//   handleSearchSubmit(event) {
//     event.preventDefault()
//     // let foo = event.target.value
//     let actor = event.target.children[0].children[1].value
//     this.props.findActor(actor)
//   }

// render(){
// return(
//   <form onSubmit={this.handleSearchSubmit.bind(this)} > 
//     <p><label htmlFor="actor">Name an Actor!</label><input type="text" name="actor" /></p>
//     <p><input type="submit" /></p>
//   </form>
//   )
// }
// }

// export default connect(null, {findActor})(SearchBar)
