var data = require('./data.json')

// console.log(data['results'][0]['title'])


var mapped = data.results.map(item=>{
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

export default questions.slice(0, 7)