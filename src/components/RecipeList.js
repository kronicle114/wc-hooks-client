import React from 'react';
import Spinner from 'react-spinkit';
import '../styles/recipelist.css';

export const RecipeList = (props) => {
  // console.log('RecipeList props: ', props)

  let recipe = (
    <div className="spinner" style={{}}>
      <Spinner name="line-spin-fade-loader" color="green"/>
    </div>
  );

  const IMG_BASE_URL = 'https://spoonacular.com/recipeImages/';
  if (props.recipes) {
    // console.log('recipe results: ', props.recipes)
    // console.log(props.recipes.image)
    return recipe = props.recipes.map( (recipe, index) => {
      return (
        <li key={index} recipe-id={recipe.id} className="recipe-item" tabIndex='0'>
          <h2>{recipe.title}</h2>
          <img src={`${IMG_BASE_URL}${recipe.image}`} alt={recipe.title} />
          <ul className="recipe-info">
            <li><span>Prep Time: </span>{recipe.readyInMinutes}</li>
            <li><span>Servings: </span>{recipe.servings}</li>
          </ul>
        </li>
      )
    })
  } 

  return (recipe);
};

export default RecipeList;