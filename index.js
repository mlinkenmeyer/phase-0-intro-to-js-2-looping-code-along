const cards = ["Cassi", "Jaci", "Cari"];

function writeCards(cards) {
  const thankYouCardsArray = [];
  for (let i = 0; i < cards.length; i++) {
    let thankYouMessage = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
    thankYouCardsArray.push(thankYouMessage);
  }

  return thankYouCardsArray;
}

writeCards(cards);

function countDown() {
  let startingNumber = 10;
  while (startingNumber >= 0) {
    console.log(startingNumber--);
  }
}

countDown();

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }
// wrapGifts(gifts);

// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0;
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++;
//   }
//   return gifts;
// }
// wrapGifts(gifts);
