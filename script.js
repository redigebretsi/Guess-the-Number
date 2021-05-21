'use strict';
console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Lets have a party😜';
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.message'));
});

let score = 20;
document.querySelector('.number').textContent = 3;
document.querySelector('.check').addEventListener('click', function () {
  if (
    Number(document.querySelector('.guess').value) ==
      document.querySelector('.number').textContent &&
    score > 1
  ) {
    document.querySelector('.message').textContent =
      'Congrats you got the number🎖🥂';
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (
    Number(document.querySelector('.guess').value) >=
    document.querySelector('.number').textContent
  ) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Ohh no,Your number is too High😎😎';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game😪';
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Ohh no,Your number is too Low😎';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game😪';
    }
  }
});
