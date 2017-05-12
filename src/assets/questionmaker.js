// var data = require('./data.json')
var XMLHttpRequest = require("xmlhttprequest");
var fetch = require('whatwg-fetch')
// https://www.npmjs.com/package/xhr
// console.log(data['results'][0]['title'])
const getUrl = function(actor) {
    const url = "http://api.themoviedb.org/3/search/person?api_key=0565cf9b565d67438edd46ccfecb5c1d&language=en-US&query=" + actor + "&page=1&include_adult=false"
    fetch(url).then((response=>{
      console.log(response)
    }))
    // return foo
}

const getData = (actor) => {

  const data = JSON.parse(getUrl(actor))
  const movies = data["results"][0]["known_for"]

  var mapped = movies.map(item=>{
    let year = item['release_date'].substr(0, 4)
    return {
      title: item['title'],
      year: year,
      img: item['poster_path'],
      options: [year, (parseInt(year)-2).toString(), (parseInt(year)+3).toString()]
    }

  })

  var questions = mapped.map(item=>{
    return {
      title: item.title,
      question: "what year was " + item.title + " released?",
      answers: [{
        correct: true,
        content: item.options[0]
      },
      {
        correct: false,
        content: item.options[1]
      },
      {
        correct: false,
        content: item.options[2]
      }],
      poster: item.img
    }


  })

  return questions

}

// export default getData

console.log(getData('angelina jolie'))

// export default questions.slice(0, 7)