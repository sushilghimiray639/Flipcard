let cardResults = ["Win", "Fail", "Fail"];

function shuffleArray() {
  cardResults.sort(() => Math.random() - 0.5);
}

shuffleArray();

function flipCard(cardElement, index) {
  const backFace = cardElement.querySelector(".card-back");
  const result = cardResults[index];

  // Use emojis instead of text
  if (result === "Win") {
    backFace.textContent = "🎉";
    backFace.style.backgroundColor = "#27ae60";
  } else {
    backFace.textContent = "❌";
    backFace.style.backgroundColor = "#e74c3c";
  }

  cardElement.classList.add("is-flipped");
}

function resetGame() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.classList.remove("is-flipped"));
  shuffleArray();
}
