// Variables
const baseURL = "https://swapi.dev/api/";
let planetsURL = `${baseURL}planets/?page=1`;
let nextPlanets;
let previousPlanets;
const nextPlanetsBtn = document.querySelector(".planets-next");
const prevPlanetsBtn = document.querySelector(".planets-previous");
const resultCards = document.getElementById("main-content");
const languageSelect = document.getElementById("language");
const episodeSelect = document.getElementById("episode-list");
const getInfoBtn = document.querySelector(".characters-list");
const getPlanetsBtn = document.querySelector(".planets-list");

// Language
function changeLanguage() {
  return languageSelect.value;
}

// Episodes info
async function selectEpisode() {
  let optionValue = episodeSelect.options[episodeSelect.selectedIndex].value;
  const request = await fetch(`${baseURL}films/${optionValue}`);
  const response = await request.json();
  let characters = response.characters;

  for (let i = 0; i < characters.length; i++) {
    const charactersInfo = await fetch(`${characters[i] + changeLanguage()}`);
    const character = await charactersInfo.json();
    let photoCharacter = characters[i].slice(-3, -1).replace("/", "");
    showInfo(character, photoCharacter);
  }
}

// Characters info
function showInfo(character, photoCharacter) {
  let characterName = character.name || character.whrascwo;
  let characterBirth = character.birth_year || character.rhahrcaoac_roworarc;
  let characterGender = character.gender || character.rrwowhwaworc;

  if (
    characterGender === "n/a" ||
    characterGender === "none" ||
    characterGender === "hermaphrodite" ||
    characterGender === "wh/ra" ||
    characterGender === "acworcscraakacrcoowaahaowo" ||
    characterGender === "whoowhwo"
  ) {
    characterGender = "agender";
  }
  if (characterGender === "scraanwo") {
    characterGender = "male";
  }
  if (characterGender === "wwwoscraanwo") {
    characterGender = "female";
  }

  resultCards.innerHTML += `
        <div class="main-cards">
          <img class="character-photo" src="https://starwars-visualguide.com/assets/img/characters/${photoCharacter}.jpg" alt="character-photo"/>
          <h4 class="card-title">Name: ${characterName}</h4>
          <p class="card-title">Birth year: ${characterBirth}</p>
          <img class="gender-icon" src="./img/${characterGender}.png" alt="gender-icon"/>
        </div>  
      `;
}

// Planets info
async function getPlanets() {
  const request = await fetch(planetsURL);
  const response = await request.json();
  let output = "";
  let planets = response.results;
  nextPlanets = response.next;
  previousPlanets = response.previous;

  planets.forEach((item) => {
    let planetsLink = `https://starwars-visualguide.com/assets/img/planets/${item.url
      .slice(-3, -1)
      .replace("/", "")}.jpg`;
    function imgError(planetsLink) {
      planetsLink.onerror = "";
      planetsLink.src =
        "https://starwars-visualguide.com/assets/img/placeholder.jpg";
      return true;
    }
    output += `
        <div class="main-cards">
          <img class="planets-photo" src="${planetsLink}" onError="this.onerror=null;this.src='https://starwars-visualguide.com/assets/img/placeholder.jpg';" alt="planet-photo"/>
          <h4 class="card-title">${item.name}</h4>
        </div>  
      `;
  });
  resultCards.innerHTML = output;
}

// Planets pages
function pageNextPlanets() {
  if (nextPlanets) {
    planetsURL = new URL(nextPlanets);
  }
  getPlanets()
    .then((response) => {
      console.log(`Success: Planets`);
    })
    .catch((error) => {
      console.log(`error!`);
      console.error(error);
    });
}

function pagePreviousPlanets() {
  if (previousPlanets) {
    planetsURL = new URL(previousPlanets);
  }
  getPlanets()
    .then((response) => {
      console.log(`Success: Planets`);
    })
    .catch((error) => {
      console.log(`error!`);
      console.error(error);
    });
}

// event listener for selections
languageSelect.addEventListener("change", changeLanguage);
episodeSelect.addEventListener("", selectEpisode);

// event listener for buttons
getInfoBtn.addEventListener("click", () => {
  resultCards.innerHTML = "";
  selectEpisode();
});
getPlanetsBtn.addEventListener("click", getPlanets);
nextPlanetsBtn.addEventListener("click", pageNextPlanets);
prevPlanetsBtn.addEventListener("click", pagePreviousPlanets);
