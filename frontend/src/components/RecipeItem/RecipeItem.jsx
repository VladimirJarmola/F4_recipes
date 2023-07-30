import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import css from './RecipeItem.module.css';

function RecipeItem(props) {

    let path = 'http://127.0.0.1:8000/api' + props.pathRecipe;
    let [dataRecipeItem, setDataRecipeItem] = useState();
    
    useEffect(() => {
        axios.get(path)
        .then(res => { 
            let recArray = {
                'id': res.data.id,
                'title': res.data.title,
                'text': res.data.text,
                'img': res.data.img,
                'category_id': res.data.category
            };                          
            setDataRecipeItem(recArray);       
        })
        .catch(error => {
            console.log(error);
        })  
    },[]);

    if (!dataRecipeItem) {
        <div>Загрузка...</div>
    } else {
        return (
            <>
                <div><h1>{dataRecipeItem.title}</h1></div>
                <img src={dataRecipeItem.img}/>
                <div>{dataRecipeItem.text}</div>
            </>           
        )
    }
    
}

export default RecipeItem;
