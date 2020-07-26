document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    { name: "apple", img: "img/apple.png" },
    { name: "apple", img: "img/apple.png" },
    { name: "banana", img: "img/banana.png" },
    { name: "banana", img: "img/banana.png" },
    { name: "grape", img: "img/grape.png" },
    { name: "grape", img: "img/grape.png" },
    { name: "pineapple", img: "img/pineapple.png" },
    { name: "pineapple", img: "img/pineapple.png" },
    { name: "strawberry", img: "img/strawberry.png" },
    { name: "strawberry", img: "img/strawberry.png" },
    { name: "watermelon", img: "img/watermelon.png" },
    { name: "watermelon", img: "img/watermelon.png" },
  ];
  // Randomize cardArray
  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //Create game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "img/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener('click',flipcard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch(){
  let cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src','img/blank.png')
      cards[optionTwoId].setAttribute('src','img/blank,png')
      alert('You have clicked the same image!')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src','img/white.png')
      cards[optionTwoId].setAttribute('src', 'img/white.png')
      cards[optionOneId].removeEventListener('click',flipcard)
      cards[optionTwoId].removeEventListener('click',flipcard)
      cardsWon.push(cardsChosen)
  } else {
      cards[optionOneId].setAttribute('src','img/blank.png')
      cards[optionTwoId].setAttribute('src','img/blank.png')
      alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if(cardsWon.length === cardArray.length/2){
      resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}
  //flip your card
function flipcard () {
    let cardId = this.getAttribute ('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

  createBoard()

});
