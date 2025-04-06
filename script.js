import {
  knownGames,
  quickFunGames,
  simpleGames,
  skepticalGames,
  newGames,
} from "./games.js";

let categoryIndexes ={
  0: knownGames,
  1: quickFunGames,
  2: skepticalGames,
  3: simpleGames,
  4: newGames
}

let selectedCategoryIndex = 0

let gameCategories = document.getElementById("game-categories");
let option = document.querySelector(".option");

let isAnimating = false;
let categorySelected = false;

let button = document.getElementById("btn");
let paragraph = document.getElementById("paragraph");
let gameCount = document.getElementById("total-game-count");
let categoryGameCount = document.getElementById("category-game-count")

gameCategories.addEventListener("change", () => {
  selectedCategoryIndex = gameCategories.selectedIndex
  
});

function newGame() {
  let anim;
  if (!isAnimating) {
    isAnimating = true;

    anim = setInterval(() => {
      paragraph.textContent =
        categoryIndexes[selectedCategoryIndex][Math.floor(Math.random() * categoryIndexes[selectedCategoryIndex].length)] || "";
    }, 50);

    setTimeout(() => {
      clearInterval(anim);
      isAnimating = false;

      if (categorySelected) {
        paragraph.textContent =
          categoryIndexes[selectedCategoryIndex][Math.floor(Math.random() * categoryIndexes[selectedCategoryIndex].length)]
      } else {
        paragraph.textContent =
          categoryIndexes[selectedCategoryIndex][Math.floor(Math.random() * categoryIndexes[selectedCategoryIndex].length)]
      }
    }, 1000);
  }
}

button.addEventListener("click", newGame);

gameCount.textContent = `Amount of games: ${knownGames.length}`;
categoryGameCount.textContent = `Games in this category: ${selectedCategoryIndex.length}`
