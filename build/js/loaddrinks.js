const cards = document.getElementById("cards");
const tragos = document.getElementById("tragos");
const bebida = document.getElementById("drink");
const container = document.querySelector(".spi");
const logo = document.querySelector(".logo-white");

const createSpinner = () => {
  const spinner = document.createElement("div");
  spinner.classList.add("sk-chase");
  spinner.innerHTML = `
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  `;
  return spinner;
};

const verifyIngredient = (ingredient) => {
  return ingredient != null ? `<p>${ingredient}</p>` : "";
};

const verifyCategory = (category) => {
  switch (category) {
    case "Ordinary Drink":
      return '<h4 class="blue">Ordinary Drink</h4>';
    case "Non alcoholic":
      return '<h4 class="cyan">Non alcoholic</h4>';
    case "Coffee / Tea":
      return '<h4 class="brown">Coffee / Tea</h4>';
    case "Shot":
      return '<h4 class="yellow">Shot</h4>';
    case "Punch / Party Drink":
      return '<h4 class="red">Punch / Party Drink</h4>';
    case "Cocktail":
      return '<h4 class="green">Cocktail</h4>';
    case "Soft Drink":
      return '<h4 class="soft">Soft Drink</h4>';
    case "Beer":
      return '<h4 class="Beer">Beer</h4>';
    default:
      return `<h4>${category}</h4>`;
  }
};

const createCard = (drinkData) => {
  const {
    strCategory,
    strInstructions,
    strDrink,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    idDrink,
  } = drinkData;

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="header-card">
      <img src="${strDrinkThumb}" alt="" />
    </div>
    <div class="body-card">
      <h3>${strDrink}</h3>
    </div>
    <div class="ingredient"> 
      <h4 class="recipe --orange">Ingredients</h4>
      ${verifyIngredient(strIngredient1)}
      ${verifyIngredient(strIngredient2)}
      ${verifyIngredient(strIngredient3)}
      ${verifyIngredient(strIngredient4)}
      ${verifyIngredient(strIngredient5)}
    </div>
    <div class="footer-card">
      
      ${verifyCategory(strCategory)}
      <button class="add" onclick="addDrink(${idDrink})" title="Agregar a mi lista">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
    <div class="overlay-card" id="over">
      <h4 class="recipe">Instructions</h4>
      <p class>${strInstructions}</p>
    </div>
  `;
  return card;
};

const loadDrinks = () => {
  cards.style.display = "flex";
  cards.innerHTML = "";

  const spinner = createSpinner();
  container.appendChild(spinner);
  logo.classList.add("animate__shakeX");

  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${bebida.value}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      if (data.drinks != null) {
        data.drinks.forEach((element) => {
          console.log(element);
          const card = createCard(element);
          cards.appendChild(card);

          logo.classList.remove("animate__shakeX");

          tragos.scrollIntoView({ behavior: "smooth" });

          setTimeout(() => {
            container.removeChild(spinner);
          }, 2500);
        });
      } else {
        let parrafo = document.createElement("p");

        parrafo.classList.add("alert");

        parrafo.textContent = "Trago o ingrediente no válido";

        container.appendChild(parrafo);

        container.removeChild(spinner);

        setTimeout(() => {
          container.removeChild(parrafo);
        }, 1500);
      }

      bebida.value = "";
    })
    .catch((err) => console.log(err));
};
