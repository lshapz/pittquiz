var data = require('./brad_pitt_data.json') 
 
 var mapped = data.results.map(item=>{
   let year = item['release_date'].substr(0, 4)
   return {
     title: item['title'],
     year: year,
     img: item['poster_path'],
     options: [year, (parseInt(year)-3).toString(), (parseInt(year)+2).toString()]
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
 
 export default questions
 
