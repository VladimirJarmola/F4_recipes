import React, { useState, useEffect } from "react";
import axios from 'axios';

import css from './Recipes.module.css';

import Recipe from '../Recipe/Recipe';

function Recipes(props) {

    let [recipes, setRecipes] = useState();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/recipes`,)
        .then(res => {
            
            let recipes = res.data.map(({id, title, text, img, category})=>({
                'id': id,
                'title': title,
                'text': text,
                'img': img,
                'category_id': category
            }));
            setRecipes(recipes);           
        })    
        .catch(error => {
            console.log(error);
          })  
    },[]);
    
    if (!recipes) {
        return (
            <div>Рецепты не найдены!</div>
        )
    } else if (props.categoryId === 0) {
        return (
            <div>
                <p>Выберите категорию!</p>
            </div>
        )
    } else if (!props.categoryId) {
        return (
            <div className={css.recipes}>
                {recipes.map(elem => 
                <Recipe key={elem.title}
                    id={elem.id}
                    title={elem.title}
                    text={elem.text}
                    img={elem.img}
                    category_id={elem.category_id}
                    setPathRecipe={props.setPathRecipe}
                />
                )}
            </div>
        )
    } else {
        return (
            <div className={css.recipes}>
                {recipes.filter((elem) => elem.category_id === props.categoryId).map(elem => 
                <Recipe key={elem.title}
                    id={elem.id}
                    title={elem.title}
                    text={elem.text}
                    img={elem.img}
                    category_id={elem.category_id}
                    setPathRecipe={props.setPathRecipe}
                />
                )}
            </div>
        )
    }
    }

export default Recipes;
