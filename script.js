var totalButtons = document.querySelectorAll(".btn").length;
var count = 0;
var currentPlayer = "X";
for (let i = 0; i < totalButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    if (count % 2 === 0) {
      document.querySelector(`.a${i}`).textContent = "X";
      currentPlayer = "X";
      count++;
    } else {
      document.querySelector(`.a${i}`).textContent = "0";
      currentPlayer = "0";
      count++;
    }
    var whoWon = ifMatches(currentPlayer);
    if (whoWon) {
      document.querySelector(".current-player").classList.add("visible");
    }
    // Its a Draw
    if (count === 9 && !whoWon) {
      resetsAll();
    }
  });
}

// restart button
document.querySelector("#restart").addEventListener("click", function () {
  resetsAll();
});

//resets to initial values
function resetsAll() {
  for (var i = 0; i < totalButtons; i++) {
    document.querySelectorAll(".btn")[i].textContent = "";
  }
  count = 0;
  currentPlayer = "X";
  document.querySelector(".current-player").classList.remove("visible");
}

// check if any palyer has won the game
function ifMatches(currentPlayer) {
  //check if all row elements are same
  if (
    (document.querySelector(".a0").textContent === currentPlayer &&
      document.querySelector(".a1").textContent === currentPlayer &&
      document.querySelector(".a2").textContent === currentPlayer) ||
    (document.querySelector(".a3").textContent === currentPlayer &&
      document.querySelector(".a4").textContent === currentPlayer &&
      document.querySelector(".a5").textContent === currentPlayer) ||
    (document.querySelector(".a6").textContent === currentPlayer &&
      document.querySelector(".a7").textContent === currentPlayer &&
      document.querySelector(".a8").textContent === currentPlayer)
  ) {
    return true;
  }

  //check if all column elements are same
  if (
    (document.querySelector(".a0").textContent === currentPlayer &&
      document.querySelector(".a3").textContent === currentPlayer &&
      document.querySelector(".a6").textContent === currentPlayer) ||
    (document.querySelector(".a1").textContent === currentPlayer &&
      document.querySelector(".a4").textContent === currentPlayer &&
      document.querySelector(".a7").textContent === currentPlayer) ||
    (document.querySelector(".a2").textContent === currentPlayer &&
      document.querySelector(".a5").textContent === currentPlayer &&
      document.querySelector(".a8").textContent === currentPlayer)
  ) {
    return true;
  }

  //check if diagonal elements are same
  if (
    (document.querySelector(".a0").textContent === currentPlayer &&
      document.querySelector(".a4").textContent === currentPlayer &&
      document.querySelector(".a8").textContent === currentPlayer) ||
    (document.querySelector(".a2").textContent === currentPlayer &&
      document.querySelector(".a4").textContent === currentPlayer &&
      document.querySelector(".a6").textContent === currentPlayer)
  ) {
    return true;
  }
  return false;
}
