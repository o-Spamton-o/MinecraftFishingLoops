// Functionize Minecraft Fishing Start Code

// HTML Variables

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let inventory = document.getElementById("inventory");
// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  let character = document.getElementById("character-select").value;
  // Steve Fish Simulator
  if (character === "steve") {
    let randNum = Math.random();
    if (randNum < 0.7) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Raw-Cod.png' width='25px'>";
    } else if (randNum < 0.9) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Raw-Salmon.png' width='25px'>";
    } else if (randNum < 0.95) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Tropical-Fish.png' width='25px'>";
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Pufferfish.png' width='25px'>";
    }
  }
  if (character === "alex") {
    let randNum = Math.random();
    if (randNum < 0.1) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Raw-Cod.png' width='25px'>";
    } else if (randNum < 0.2) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Raw-Salmon.png' width='25px'>";
    } else if (randNum < 0.5) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Tropical-Fish.png' width='25px'>";
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Pufferfish.png' width='25px'>";
    }
  }
  if (character === "villager") {
    let randNum = Math.random();
    if (randNum <= 0.25) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Raw-Cod.png' width='25px'>";
    } else if (randNum <= 0.5) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Raw-Salmon.png' width='25px'>";
    } else if (randNum <= 0.75) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Tropical-Fish.png' width='25px'>";
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
      document.getElementById("inventory").innerHTML +=
        "<img src='img/Pufferfish.png' width='25px'>";
    }
  }
}

plus5Btn.addEventListener("click", plus5);

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

until200Btn.addEventListener("click", until200);

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
  }
}

let totalFish = document.getElementById("totalFish").value;
let fishAmount = 0;
document.getElementById("totalFish").addEventListener("change", fishXAmount);

function fishXAmount() {
  let totalFish = document.getElementById("totalFish").value;
  let fishAmount = 0;
  while (fishAmount < totalFish) {
    fishBtnClicked();
    fishAmount++;
  }
}

document.getElementById("sort").addEventListener("click", sort);

function sort() {
  document.getElementById("inventory").innerHTML = "";
  for (let n = 0; n < numCod; n++) {
    document.getElementById("inventory").innerHTML +=
      "<img src='img/Raw-Cod.png' width='25px'>";
  }
  for (let n = 0; n < numSalmon; n++) {
    document.getElementById("inventory").innerHTML +=
      "<img src='img/Raw-Salmon.png' width='25px'>";
  }
  for (let n = 0; n < numTropical; n++) {
    document.getElementById("inventory").innerHTML +=
      "<img src='img/Tropical-Fish.png' width='25px'>";
  }
  for (let n = 0; n < numPuffer; n++) {
    document.getElementById("inventory").innerHTML +=
      "<img src='img/Pufferfish.png' width='25px'>";
  }
}
