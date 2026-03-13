let cardResults = ["Win", "Fail", "Fail"];

function shuffleArray() {
  cardResults.sort(() => Math.random() - 0.5);
}

shuffleArray();

function flipCard(cardElement, index) {
  const backFace = cardElement.querySelector(".card-back");
  const result = cardResults[index];

  backFace.textContent = result;

  if (result === "Win") {
    backFace.style.backgroundColor = "#27ae60"; // Green
  } else {
    backFace.style.backgroundColor = "#e74c3c"; // Red
  }

  cardElement.classList.add("is-flipped");
}

function resetGame() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.classList.remove("is-flipped"));
  shuffleArray();
}
