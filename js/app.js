const searchMeals = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    const NoResult = document.querySelector('.no-result');
    NoResult.innerHTML = '';
    

    if (meals) {
        meals.forEach(meal => {
        const foodName = document.createElement('div');
        foodName.className = 'food-item';
        foodName.innerHTML = `
            <div>
            <img src="${meal.strMealThumb}" alt="">
            <h3>${meal.strMeal}</h3>
            <button onclick = "getRecipe('${meal.strMeal}' )"
            class = "recipe-btn" > Get Recipe </button>
            </div>
            `;
        mealContainer.appendChild(foodName);
        })
        
    }
        else{
            NoResult.innerHTML = `<h1>No Results Found</h1>`;
        }
}

const getRecipe = meal =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json())
    .then(data => displayRecipe(data.meals[0]))
}

const displayRecipe = (recipe)=>{
    const recipeDetails = document.getElementById('recipe-details');
    recipeDetails.innerHTML ='';
    const recipeDetailsDiv = document.createElement('div');
    recipeDetailsDiv.className = 'recipe-details-div';
    recipeDetailsDiv.innerHTML = `
        <img src=${recipe.strMealThumb}>
        <h3>${recipe.strMeal}</h3>
        <h6>Ingredients:</h6>
        <p>${recipe.strMeasure1} ${recipe.strIngredient1}</p>
        <p>${recipe.strMeasure2} ${recipe.strIngredient2}</p>
        <p>${recipe.strMeasure3} ${recipe.strIngredient3}</p>
        <p>${recipe.strMeasure4} ${recipe.strIngredient4}</p>
        <p>${recipe.strMeasure5} ${recipe.strIngredient5}</p>
        <p>${recipe.strMeasure6} ${recipe.strIngredient6}</p>
        <p>${recipe.strMeasure7} ${recipe.strIngredient7}</p>
        <p>${recipe.strMeasure8} ${recipe.strIngredient8}</p>
        <p>${recipe.strMeasure9} ${recipe.strIngredient9}</p>
        <p>${recipe.strMeasure10} ${recipe.strIngredient10}</p>
        <p>${recipe.strMeasure11} ${recipe.strIngredient11}</p>
        <p>${recipe.strMeasure12} ${recipe.strIngredient12}</p>
        <p>${recipe.strMeasure13} ${recipe.strIngredient13}</p>
        <p>${recipe.strMeasure14} ${recipe.strIngredient14}</p>
        <p>${recipe.strMeasure15} ${recipe.strIngredient15}</p>
        <p>${recipe.strMeasure16} ${recipe.strIngredient16}</p>
        <p>${recipe.strMeasure17} ${recipe.strIngredient17}</p>
        <p>${recipe.strMeasure18} ${recipe.strIngredient18}</p>
        <p>${recipe.strMeasure19} ${recipe.strIngredient19}</p>
        <p>${recipe.strMeasure20} ${recipe.strIngredient20}</p>
    `;
    recipeDetails.appendChild(recipeDetailsDiv);
};


