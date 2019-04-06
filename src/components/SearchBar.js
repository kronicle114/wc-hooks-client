import React, { useState } from 'react';
import RecipeList from './RecipeList';

export const SearchBar = () => {
  const [ recipeList, setRecipeList ] = 
  useState([]);
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
      console.log(data.results);
      console.log('recipeList: ', recipeList)
    })
    .catch( err => {
      console.log(err)
    })
  }

  return(
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

      <RecipeList recipes={recipeList} />
   </section>
  );

};

export default SearchBar;