import React from 'react'
import style from './recipe.module.css';

function Recipe({title, image, cal, ingredients}) {
    return (
        <div className={style.recipe}>
            <h2>{title}</h2>
            <ul>
               {ingredients.map(res=> (
                   <li>{res.text}</li>
               ))}
            </ul>
            <img className={style.image} src={image}/>
            <p>Calories Count: {Math.round(cal)}</p>
            
        </div>
    )
}

export default Recipe

