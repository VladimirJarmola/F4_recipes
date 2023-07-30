import React from "react";
import { useState } from "react";
import {Route, Switch, Link} from 'react-router-dom';

import css from './Main.module.css';

import Categories from '../Categories/Categories';
import Recipes from "../Recipes/Recipes";
import RecipeItem from '../RecipeItem/RecipeItem';

function Main() {
    const [categoryId, setCategoryId] = useState();
    const [pathRecipe, setPathRecipe] = useState();

    function handleClick() {
        setCategoryId(undefined);
        setPathRecipe(undefined);
    }

    function handleClickForCat() {
        setCategoryId(0);
        setPathRecipe(undefined);
    }

    return (
        <>         
            <ul>
                <li><Link to='/' onClick={handleClick}>Главная</Link></li>
                <li><Link to='/categories' onClick={handleClickForCat}>Категории</Link></li>
                <li><Link to='/recipes/all' onClick={handleClick}>Рецепты</Link></li>
            </ul>

            {!pathRecipe ? 
                <Switch>                
                    <Route path='/categories'>
                        <Categories  categoryId={categoryId} setCategoryId={setCategoryId}/>
                        <Recipes categoryId={categoryId} setPathRecipe={setPathRecipe}/>
                    </Route>
                    <Route path='/recipes/all'>
                        <Recipes categoryId={categoryId} setPathRecipe={setPathRecipe}/>
                    </Route>
                    <Route path='/'>
                        <Categories categoryId={categoryId} setCategoryId={setCategoryId}/>
                        <Recipes categoryId={categoryId} setPathRecipe={setPathRecipe}/>
                    </Route>                                           
                </Switch> 
                :
                <Route path={pathRecipe}>
                    <RecipeItem pathRecipe={pathRecipe}/>
                </Route>

            }
            
        </>
        
    )
}

export default Main;
