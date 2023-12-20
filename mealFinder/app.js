const searchMeal = async (e) => {
  e.preventDefault();
  console.log("clicked");
  const input = document.querySelector("input");
  const title = document.querySelector(".title");
  const info = document.querySelector(".info");
  const img = document.querySelector(".img");
  const ingredientsOutput = document.querySelector(".ingredients");

  const showMealInfo = (meal) => {
    const { strMeal, strMealThumb, strInstructions } = meal;
    title.textContent = strMeal;
    img.style.backgroundImage = `url(${strMealThumb})`;
    info.textContent = strInstructions;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }

    const html = `
    <span>${ingredients
      .map((ing) => `<li class='ing'>${ing}</li>`)
      .join("")}</span>
    `;

    ingredientsOutput.innerHTML = html;
  };

  const showAlert = () => {
    alert("No meal found, try again...!");
  };

  const fetchMealData = async (val) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
    );

    const { meals } = await res.json();
    // console.log(meals);
    return meals;
  };

  const val = input.value.trim();

  if (val) {
    const meals = await fetchMealData(val);

    if (!meals) {
      showAlert();
      return;
    }
    meals.forEach(showMealInfo);
  } else {
    alert("Please enter a meal name...!");
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", searchMeal);

const magnifier = document.querySelector("i");
magnifier.addEventListener("click", searchMeal);
