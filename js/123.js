// import Onetwothree from "./classOnetwothree.js";
// let test = new Onetwothree();
// test.say();

// import stateData from "./state.json";
// export default {
//   data() {
//     return {
//       slides: stateData,
//     };
//   },
// };
// let data = state;
// console.log(data);

let data = {
  slides: [
    {
      question: 'Welches ist das grösste Säugetier der Welt?',
      options: [
        {
          id: "0",
          correct: true,
          content: 'der Blauwal'
        },
        {
          id: "1",
          correct: false,
          content: 'der Elefant'
        },
        {
          id: "2",
          correct: false,
          content: 'der Brachiosaurus'
        }
      ]
    },
    {
      question: 'Welches ist der grösste Planet in unserem Sonnensystem?',
      options: [
        {
          id: "0",
          correct: true,
          content: 'der Jupiter'
        },
        {
          id: "1",
          correct: false,
          content: 'der Mars'
        },
        {
          id: "2",
          correct: false,
          content: 'die Erde'
        }
      ]
    },
    {
      question: 'Welches ist das schnellste Landtier der Welt?',
      options: [
        {
          id: "0",
          correct: true,
          content: 'der Gepard'
        },
        {
          id: "1",
          correct: false,
          content: 'die Gazelle'
        },
        {
          id: "2",
          correct: false,
          content: 'der Osterhase'
        }

      ]
    }
  ]
}

// shuffle options
data.slides.forEach(slide => {
  shuffle(slide.options)
});

// initialize Vue
let onetwothree = new Vue({
  el: '#onetwothree',
  data: {
    slides: data.slides,
    current: 0
  }
})

// controls
function prev(){
  onetwothree.current = mod( onetwothree.current - 1, onetwothree.slides.length )
}

function next(){
  onetwothree.current = mod( onetwothree.current + 1, onetwothree.slides.length )
}

function check(){

}

// helpers
function mod(val, m){
  var r = val % m
  return r<0 ? r + m : r
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
