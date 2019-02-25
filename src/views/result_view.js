const PubSub = require('../helpers/pub_sub');

const ResultView = function() {


};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const number = event.detail;
    this.displayResult(number)
    console.log(number);
  })
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result')
  if (result === false){
  resultElement.textContent = `Your number is not prime`;
  }
  else {
  resultElement.textContent = 'Your number is prime';
}
};
module.exports = ResultView;
