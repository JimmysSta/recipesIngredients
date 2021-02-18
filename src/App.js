import React, {useState} from 'react'
import axios from 'axios'
import './App.css';
import Recipe from './Recipe'

function App() {

  const APP_ID = 'db4b4c4d';
  const APP_KEY = '33295101c3622029383a5b037b46cf32';

  

 const [state, setState] = useState({
   search: '',
   recipes: [],
   recipe: {}
 })
  
 const handleInput = (e) => {
  let s = e.target.value;
  setState(prevState => {
    return {...prevState, search: s}
  });
 }

 const getRecipe = (e) => {
  e.preventDefault();
  axios.get(`https://api.edamam.com/search?q=${state.search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  .then(data => {
    let response = data;
    console.log(response);
    setState(prevState => {
      return {...prevState, recipes: response.data.hits}
    });
  });
 }
 

 

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" onChange={handleInput}/>
        <button type="submit" className="search-button" onClick={getRecipe}>Search Recipe</button>
      </form>
      <div className="recipes">
      {state.recipes.map(recipe => (
        <Recipe 
        key={recipe.count} 
        title={recipe.recipe.label} 
        image={recipe.recipe.image} 
        cal={recipe.recipe.calories}
        ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
