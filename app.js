// Part 1.1
async function getFact(num) {
  let fact = await axios.get(`http://numbersapi.com/${num}?json`);
  console.log(fact.data.text);
}

// Part 1.2
async function getMultilpeFacts(num) {
  let fact = await axios.get(`http://numbersapi.com/${num}?json`);
  console.log(fact.data);
}

// Part 1.3

let favNumArr = [];

async function getFactsForFavNum(num) {
  for (let i = 0; i < 4; i++) {
    let fact = await axios.get(`http://numbersapi.com/${num}?json`);
    let text = fact.data.text;
    favNumArr.push(text);
  }
  console.log(favNumArr);
}

// Part 2.1

async function getNewCard() {
  let deck = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  let deckId = deck.data.deck_id;

  let newCard = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  );
  console.log(
    `${newCard.data.cards[0].value} of ${newCard.data.cards[0].suit}`
  );
}

async function getMultipleCards() {
  let deck = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  let deckId = deck.data.deck_id;

  let newCard1 = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  );
  console.log(
    `${newCard1.data.cards[0].value} of ${newCard1.data.cards[0].suit}`
  );

  let newCard2 = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  );
  console.log(
    `${newCard2.data.cards[0].value} of ${newCard2.data.cards[0].suit}`
  );
}
