document.addEventListener('DOMContentLoaded', ()=>{
  const cardArray =[
    {
      name: 'tupac',
      img: 'images/tupac.jpeg'
    },
    {
      name: 'tupac',
      img: 'images/tupac.jpeg'
    },
    {
      name: 'aaliyah',
      img: 'images/aaliyah.jpeg'
    },
    {
      name: 'aaliyah',
      img: 'images/aaliyah.jpeg'
    },
    {
      name: 'biggie',
      img: 'images/biggie.jpeg'
    },
    {
      name: 'biggie',
      img: 'images/biggie.jpeg'
    },
    {
      name: 'bigl',
      img: 'images/bigl.jpeg'
    },
    {
      name: 'bigl',
      img: 'images/bigl.jpeg'
    },
    {
      name: 'bigpun',
      img: 'images/bigpun.jpeg'
    },
    {
      name: 'bigpun',
      img: 'images/bigpun.jpeg'
    },
    {
      name: 'jammasterjay',
      img: 'images/jammasterjay.jpeg'
    },
    {
      name: 'jammasterjay',
      img: 'images/jammasterjay.jpeg'
    },
    {
      name: 'natedogg',
      img: 'images/natedogg.jpeg'
    },
    {
      name: 'natedogg',
      img: 'images/natedogg.jpeg'
    },
    {
      name: 'odb',
      img: 'images/odb.jpeg'
    },
    {
      name: 'odb',
      img: 'images/odb.jpeg'
    },
    {
      name: 'prodigy',
      img: 'images/prodigy.jpeg'
    },
    {
      name: 'prodigy',
      img: 'images/prodigy.jpeg'
    },
    {
      name: 'seanprice',
      img: 'images/seanprice.jpeg'
    },
    {
      name: 'seanprice',
      img: 'images/seanprice.jpeg'
    }

  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/mic.jpeg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/mic.jpeg')
      cards[optionTwoId].setAttribute('src', 'images/mic.jpeg')
      alert('Dont click twice')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert(`You Found ${cardArray[optionOneId].name}`)
      //cards[optionOneId].setAttribute('src', 'images/blank.jpeg')
      //cards[optionTwoId].setAttribute('src', 'images/blank.jpeg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/mic.jpeg')
      cards[optionTwoId].setAttribute('src', 'images/mic.jpeg')
      alert('Try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})