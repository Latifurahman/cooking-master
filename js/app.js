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
        const card = document.createElement('div');
        card.className = 'cards';
        foodName.className = 'food-item';
        foodName.innerHTML = `
            
            <img src="${meal.strMealThumb}" alt="">
            <h3>${meal.strMeal}</h3>`;
        mealContainer.appendChild(foodName);
        })
        getIngredient();
    }
        else{
            NoResult.innerHTML = `<h1>No Results Found</h1>`;
        }
}

//     if (meals) {
//          meals.forEach(meal => {
//             let foodItem = document.querySelector('.food-item');
//             foodItem.innerHTML = `
//                 <img src="${meal.strMealThumb}" alt="">
//                 <h3>${meal.strMeal}</h3>
//             `
            
//         });
//     }
// }
    // meals.forEach(meal => {
    //     const foodName = document.createElement('div');
    //     const mealCard = document.createElement('div');
    //     mealCard.setAttribute('class', 'meal-cards')
    //     foodName.className = 'food-item';
    //     foodName.innerHTML = `
            
    //         <img src="${meal.strMealThumb}" alt="">
    //         <h3>${meal.strMeal}</h3>
            
    //     `;
    //     mealContainer.appendChild(foodName);
        

   
        // mealContainer.addEventListener('click', (event) =>{
        //     mealContainer.style.display = 'none';
        //     const foodItemIngredient = document.getElementById('food-item-ingredient');
        //     foodItemIngredient.style.display = 'inline-block';
    
        //     foodItemIngredient.innerHTML = `
        //         <img src="${meal.strMealThumb}" alt="">
        //         <h1>${meal.strMeal}</h1>
        //          <h3>${'Ingredients:'}</h3>
        //          <h5>${meal.strMeasure1} ${meal.strIngredient1}</h5>
        //          <h5>${meal.strMeasure2} ${meal.strIngredient2}</h5>
        //          <h5>${meal.strMeasure3} ${meal.strIngredient3}</h5>
        //          <h5>${meal.strMeasure4} ${meal.strIngredient4}</h5>
        //          <h5>${meal.strMeasure5} ${meal.strIngredient5}</h5>
        //          <h5>${meal.strMeasure6} ${meal.strIngredient6}</h5>
        //          <h5>${meal.strMeasure7} ${meal.strIngredient7}</h5>
        //          <h5>${meal.strMeasure8} ${meal.strIngredient8}</h5>
        //          <h5>${meal.strMeasure9} ${meal.strIngredient9}</h5>
        //          <h5>${meal.strMeasure10} ${meal.strIngredient10}</h5>
        //          <h5>${meal.strMeasure11} ${meal.strIngredient11}</h5>
        //          <h5>${meal.strMeasure12} ${meal.strIngredient12}</h5>
        //          <h5>${meal.strMeasure13} ${meal.strIngredient13}</h5>
        //          <h5>${meal.strMeasure14} ${meal.strIngredient14}</h5>
        //          <h5>${meal.strMeasure15} ${meal.strIngredient15}</h5>
        //          <h5>${meal.strMeasure16} ${meal.strIngredient16}</h5>
        //          <h5>${meal.strMeasure17} ${meal.strIngredient17}</h5>
        //          <h5>${meal.strMeasure18} ${meal.strIngredient18}</h5>
        //          <h5>${meal.strMeasure19} ${meal.strIngredient19}</h5>
        //          <h5>${meal.strMeasure20} ${meal.strIngredient20}</h5>
        //     `;

        // });
    
    

const getIngredient = () =>{
    const ingredientDetails = document.querySelector('.cards');
    ingredientDetails.forEach(meal => {
        meal.addEventListener('click', () =>{
            const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.ingredientDetails}`;
            fetch(API)
            .then(res => res.json())
            .then(data => console.log(data))
        })
    });
}








// const getIngredient = () =>{
//     const searchFood = document.getElementById('search-field').value;
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayIngredients(data.meals));
// }

// const displayIngredients = meals =>{
    
//     meals.forEach(meal2 => {
//         let mealContainer = document.getElementById('meal-container');
//         mealContainer.style.display = 'none';
//         const foodIngredient = document.getElementById('food-item-ingredient');
//             foodIngredient.innerHTML = `
//                 <img src="${meal2.strMealThumb}" alt="">
//                 <h1>${meal2.strMeal}</h1>
//                  <h3>${'Ingredients:'}</h3>
//                  <h5>${meal2.strMeasure1} ${meal2.strIngredient1}</h5>
//                  <h5>${meal2.strMeasure2} ${meal2.strIngredient2}</h5>
//                  <h5>${meal2.strMeasure3} ${meal2.strIngredient3}</h5>
//                  <h5>${meal2.strMeasure4} ${meal2.strIngredient4}</h5>
//                  <h5>${meal2.strMeasure5} ${meal2.strIngredient5}</h5>
//                  <h5>${meal2.strMeasure6} ${meal2.strIngredient6}</h5>
//                  <h5>${meal2.strMeasure7} ${meal2.strIngredient7}</h5>
//                  <h5>${meal2.strMeasure8} ${meal2.strIngredient8}</h5>
//                  <h5>${meal2.strMeasure9} ${meal2.strIngredient9}</h5>
//                  <h5>${meal2.strMeasure10} ${meal2.strIngredient10}</h5>
//                  <h5>${meal2.strMeasure11} ${meal2.strIngredient11}</h5>
//                  <h5>${meal2.strMeasure12} ${meal2.strIngredient12}</h5>
//                  <h5>${meal2.strMeasure13} ${meal2.strIngredient13}</h5>
//                  <h5>${meal2.strMeasure14} ${meal2.strIngredient14}</h5>
//                  <h5>${meal2.strMeasure15} ${meal2.strIngredient15}</h5>
//                  <h5>${meal2.strMeasure16} ${meal2.strIngredient16}</h5>
//                  <h5>${meal2.strMeasure17} ${meal2.strIngredient17}</h5>
//                  <h5>${meal2.strMeasure18} ${meal2.strIngredient18}</h5>
//                  <h5>${meal2.strMeasure19} ${meal2.strIngredient19}</h5>
//                  <h5>${meal2.strMeasure20} ${meal2.strIngredient20}</h5>
//             `