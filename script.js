let cardResults = ["Win", "Fail", "Fail"];

// Fisher-Yates shuffle for better randomness
function shuffleArray() {
  for (let i = cardResults.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardResults[i], cardResults[j]] = [cardResults[j], cardResults[i]];
  }
}

shuffleArray();

function flipCard(cardElement, index) {
  const backFace = cardElement.querySelector(".card-back");
  const result = cardResults[index];

  // Show emoji and color
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
