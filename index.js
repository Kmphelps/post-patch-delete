const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");

function renderPoke(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "like-num";
  likesNum.textContent = pokemon.likes;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn";
  likeBttn.textContent = "♥";
  likeBttn.addEventListener("click", increaseLike);

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
}

function increaseLike(e) {
  const likesElement = e.target.previousElementSibling;
  likesElement.textContent = parseInt(likesElement.textContent) + 1;
}

function createPoke(e) {
  e.preventDefault();
  const pForm = e.target;
  const pokeName = pForm.querySelector("#name-input").value;
  const pokeImg = pForm.querySelector("#img-input").value;

  if (pokeName !== "" && pokeImg !== "") {
    const poke = {
      id: 7, // hard coded can be changed to  be more dynamic
      name: pokeName,
      img: pokeImg,
      likes: 0,
    };
    renderPoke(poke);
    pokeForm.reset();
  } else {
    alert("Fill in the form!!!");
  }
}

// function getPokemons() {
// }

function init() {
  pokeForm.addEventListener("submit", createPoke);
}

init();
