import React, { useState } from 'react';
import '../styles/recipelist.css';

export const RecipeList = () => {
  const [ recipeList, setRecipeList ] = 
  useState({});
  const limit = 10;
  const [ searchTerm, setSearchTerm ] = 
  useState('');

  const handleSubmit = e => {
    e.preventDefault(); 

    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=${limit}&offset=0&query=${searchTerm}`, {
    method: 'GET',
    headers: {'X-RapidAPI-Key': 'e4c6cce7c4mshddd0445f9134516p1c6d75jsn75e73abbc6ca'}
  })
    .then(res => { 
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      const searchRecipes = res.json();
      return searchRecipes;
    })
    .then(data => {
      setRecipeList(data.results)
      console.log('recipeList: ', recipeList)
    })
    .catch( err => {
      console.log(err)
    })
  }

  let recipe;
  const IMG_BASE_URL = 'https://spoonacular.com/recipeImages/';
  if (recipeList.length > 0) {
    console.log('recipe results: ', recipeList)
    console.log(recipeList.image)
    return recipe = recipeList.map( (recipe, index) => {
      return (
        <li key={index} recipe-id={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={`${IMG_BASE_URL}${recipe.image}`} alt={recipe.title} />
          <ul className="recipe-info">
            <li><span>Prep Time: </span>{recipe.readyInMinutes}</li>
            <li><span>Servings: </span>{recipe.servings}</li>
          </ul>
        </li>
      )
    })
  } else {
    console.log('no recipes found')
    recipe = <p>Loading...</p>
  }

  return (
       <section className="search-section">
        <form 
          id="search-form"
          className="search-form"
          onSubmit={e => handleSubmit(e)}
          onKeyUp={() => console.log(searchTerm)}
          >
          <fieldset id="review-search">
          <legend>Search A Recipe...</legend>
            <label 
              htmlFor="search"
              className="search-label"
              aria-label="search-form"
            >
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              type="search"
              id="search"
              name="search"
              className="search-input"
              placeholder="burger"
            />
            </label> 
            <button type="submit">
              Submit
            </button>           
          </fieldset>
        </form>

        <ul className="recipe-list">
          recipe
        </ul>
    </section>
  );
};

export default RecipeList;