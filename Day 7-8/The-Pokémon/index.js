const form = document.querySelector("form");
const countInput = document.querySelector("input[type='number']");
const typeSelect = document.getElementById("typeSelect");
const cardsContainer = document.querySelector(".cardsContainer");
const main = document.querySelector(".main");

// Fetch Pokémon list by type
async function fetchByType(type) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  if (!res.ok) throw new Error("Type fetch failed");
  const data = await res.json();
  return data.pokemon; // array of { pokemon: { name, url }, slot }
}

// Pick N random Pokémon from list
// Pick N random Pokémon from list
function pickNRandom(list, n) {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// Fetch details for each Pokémon
async function fetchDetails(pokemonRefs) {
  const promises = pokemonRefs.map(ref =>
    fetch(ref.pokemon.url).then(r => r.json())
  );
  return Promise.all(promises);
}

// Create one Pokémon card
function createPokemonCard(poke) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.className = "pic";
  img.src = poke.sprites.front_default || "";
  img.alt = poke.name;

  const data = document.createElement("div");
  data.className = "data";

  const para = document.createElement("p");
  para.className = "para";
  para.innerText = poke.name.toUpperCase();

  data.appendChild(para);
  card.appendChild(img);
  card.appendChild(data);

  return card;
}

// Handle form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const count = Number(countInput.value);
  const type = typeSelect.value;

  if (!count || count <= 0) {
    alert("Please enter a valid number of cards.");
    return;
  }

  if (!type) {
    alert("Please select a Pokémon type.");
    return;
  }

  cardsContainer.innerHTML = "Loading...";

  try {
    const list = await fetchByType(type);           // step 1: list by type
    const selected = pickNRandom(list, count);     // step 2: pick N
    const details = await fetchDetails(selected);  // step 3: fetch details

    cardsContainer.innerHTML = "";                  // clear previous cards
    details.forEach(poke => {
      cardsContainer.appendChild(createPokemonCard(poke));
      main.appendChild(cardsContainer);
    });

  } catch (err) {
    console.error(err);
    cardsContainer.innerHTML = "Failed to load Pokémon. Try again.";
  }
});
