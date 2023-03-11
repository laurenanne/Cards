// Part 2.3
let deckId = "";

window.addEventListener("load", async function () {
  let newDeck = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  deckId = newDeck.data.deck_id;
});

let button = document.getElementById("card");
button.addEventListener("click", getCard);

let cardImage = document.querySelector(".image-card");

async function getCard() {
  let res = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  );

  let cardImgSrc = res.data.cards[0].image;
  cardImage.src = cardImgSrc;
}
