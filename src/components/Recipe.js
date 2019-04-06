import React from 'react';

export const Recipe = (props) => {
  // const [ recipe, setRecipe ] = useState({});

  // let recipe;
  // if (props.recipes !== undefined || props.recipes !== {}) {
  //   recipe = props.recipes.map((recipe, index) => {
  //     return (
  //       <li key={index}>
  //         <h2>{recipe.title}</h2>
  //         <img src={recipe.image} alt={recipe.title} />
  //         <ul className="recipe-info">
  //           <li><span>Prep Time: </span>{recipe.readyInMinutes}</li>
  //           <li><span>Servings: </span>{recipe.servings}</li>
  //         </ul>
  //       </li>
  //     )
  //   }
  // );
  // }

  // let recipe;

  // if (props.recipes === {}) {
  //   recipe = <p>No recipe</p>
  // } else {
  //  recipe = (
  //     <li>
  //       <h2>props.recipes[0].title</h2>
  //     </li>
  //   )
  // }

  // console.log('Recipe props: ', props);
  // console.log('Recipe: ', props.recipes);
  // // console.log('Recipe map', props.recipes.map( (recipe, index) => )

  // return recipe;
  console.log(props, 'recipe');
  return(<p>Test</p>)
};

export default Recipe;