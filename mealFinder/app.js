const searchMeal = async (e) => {
  e.preventDefault();
  console.log("clicked");
  const input = document.querySelector("input");
  const title = document.querySelector(".title");
  const info = document.querySelector(".info");
  const img = document.querySelector(".img");
  const ingredientsOutput = document.querySelector(".ingredients");

  const fetchMealData = async (val) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
    );

    const { meals } = await res.json();
    console.log(meals);
    return meals;
  };
  fetchMealData(input.value);
};

const form = document.querySelector("form");
form.addEventListener("submit", searchMeal);

const magnifier = document.querySelector(".magnifier");
form.addEventListener("click", searchMeal);
inputinput