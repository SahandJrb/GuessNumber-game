//--------- Script --------------//

// let secretnumber = Math.trunc(Math.random() * 50) + 1;
// let score = 15;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector(".status-message").textContent = message;
// };

// document.querySelector(".btn-submit").addEventListener(".click", function () {
//   const guess = Number(document.querySelector(".number").value);
//   console.log(guess, typeof guess);

//   //when there is no input

//   if (!guess) {
//     displayMessage("⛔ No number");

//     //when player win
//   } else if (guess === secretnumber) {
//     displayMessage("🎉 Correct Number");
//     document.querySelector(".number").textContent = secretnumber;

//     if (score > highscore) {
//       score = highscore;
//       document.querySelector(".score").textContent = highscore;
//     }

//     //when guess is wrong
//   } else if (guess !== secretnumber) {
//     if (score > 1) {
//       displayMessage(guess > secretnumber ? "📈 Too high!" : "📉 Too low!");
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       displayMessage("💥 You lost the game");
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// document.querySelector(".btn-restart").addEventListener(".click", function () {
//   score = 15;
//   secretnumber = Math.trunc(Math.random() * 50) + 1;
//   displayMessage("status 📊");
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
// });

let secretnumber = Math.trunc(Math.random() * 50) + 1;
let score = 15;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".status-message").textContent = message;
};

const fireConfetti = function () {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

document.querySelector(".btn-submit").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-input").value);

  // when there is no input
  if (!guess) {
    displayMessage("⛔ No number!");

    // when player win
  } else if (guess === secretnumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretnumber;

    fireConfetti();

    if (score > highscore) {
      highscore = score;
      document.querySelector(".score").textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displayMessage(guess > secretnumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".chance").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".chance").textContent = 0;
    }
  }
});

document.querySelector(".btn-restart").addEventListener("click", function () {
  score = 15;
  secretnumber = Math.trunc(Math.random() * 50) + 1;

  displayMessage("Status 📊");
  document.querySelector(".chance").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess-input").value = "";
});
