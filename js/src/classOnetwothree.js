const default_config = {
  selector: "#ott",
  shuffle: true
};

export class Onetwothree{

  constructor(config){
    this.config = {...default_config, ...config};
    this.loadSlides();
    if (this.config.shuffle) this.shuffleAnswers();
    this.currentIndex = 0;
    this.currentSlide = { slide: this.getSlide(this.currentIndex) };
    this.initVue(this.config.selector);
  }

  //  constructor(config = {}) {
  //  }

  /**
   * Test method - Log current state
   */
  logCurrent(){
    console.log('Current index: ' + this.currentIndex + ' with question: ' + this.currentSlide.slide.question);
    console.log(this.currentSlide.slide);
  }

  /**
   * @returns the current slide object
   */
  getSlide(){
    return this.data.slides[this.currentIndex];
  }

  /**
   * increases the value of 'currentIndex'
   */
  previousSlide(){
    this.vue.solution = false;
    if (this.config.shuffle) this.shuffleAnswers(); // not strictly necessary
    this.currentIndex = this._mod( this.currentIndex - 1, this.data.slides.length );
    this.currentSlide.slide = this.getSlide(this.currentIndex);
  }

  /**
   * decreases the value of 'currentIndex'
   */
  nextSlide(){
    this.vue.solution = false;
    if (this.config.shuffle) this.shuffleAnswers(); // not strictly necessary
    this.currentIndex = this._mod(this.currentIndex + 1, this.data.slides.length);
    this.currentSlide.slide = this.getSlide(this.currentIndex);
  }

  /**
   * Toggles the solution boolean
   */
  check(){
    this.vue.solution = this.vue.solution ? false : true;
  }

  /**
   * loads the slides, currently from testdata, later from json file
   */
  loadSlides(){
    // testdata
    this.data = {
      slides: [
        {
          id: 0,
          question: 'Welches ist das grösste Säugetier der Welt?',
          answers: [{
              id: 0,
              correct: true,
              content: 'der Blauwal'
            },
            {
              id: 1,
              correct: false,
              content: 'der Elefant'
            },
            {
              id: 2,
              correct: false,
              content: 'der Brachiosaurus'
            }
          ]
        },
        {
          id: 1,
          question: 'Welches ist der grösste Planet in unserem Sonnensystem?',
          answers: [{
              id: 0,
              correct: true,
              content: 'der Jupiter'
            },
            {
              id: 1,
              correct: false,
              content: 'der Mars'
            },
            {
              id: 2,
              correct: false,
              content: 'die Erde'
            }
          ]
        },
        {
          id: 2,
          question: 'Welches ist das schnellste Landtier der Welt?',
          answers: [{
              id: 0,
              correct: true,
              content: 'der Gepard'
            },
            {
              id: 1,
              correct: false,
              content: 'die Gazelle'
            },
            {
              id: 2,
              correct: false,
              content: 'der Osterhase'
            }
          ]
        }
      ]
    }
  }

  /**
   * shuffle all answers in every item of data.slides
   */
  shuffleAnswers() {
    this.data.slides.forEach(slide => {
      this._shuffle(slide.answers)
    });
  }

  /**
   * init vue instance
   */
  initVue(selector){
    // initialize Vue
    this.vue = new Vue({
      el: selector,
      data: {
        data: this.currentSlide,
        solution: false
      }
    })
  }

  /**
   * shuffle array elements
   * @param {array} array
   * @returns array
   */
  _shuffle(array){
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }
    return array;
  }

  /**
   * clamp val between 0 and m
   * @param {int} val
   * @param {int} m
   * @returns clamped val
   */
  _mod(val, m) {
    var r = val % m
    return r < 0 ? r + m : r
  }

}

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
