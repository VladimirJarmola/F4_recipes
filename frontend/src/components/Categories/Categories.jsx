import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import Category from '../Category/Category';

import css from "./Categories.module.css";

function Categories(props) {
        
    let [categories, setCategories] = useState();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/categories`,)
        .then(res => {
            
            let categories = res.data.map(({id, title}) => ({
                'id': id,
                'category_name': title
            }) 
            );
            
            setCategories(categories);       
        })
        .catch(error => {
            console.log(error);
        })  
    },[]);

    console.log(props.categoryId)
    
    if (!categories) {
        <div>Loading...</div>
    } else if (!props.categoryId) {
        return (  
            <div className={css.categories}>
                {categories.map(elem => 
                    <Category key={elem.category_name} 
                    category={elem.category_name}
                    id={elem.id}
                    categoryId={props.categoryId} 
                    setCategoryId={props.setCategoryId}
                    />
                )}
            </div>                        
        )
    } else {
        return (  
            <div className={css.categories}>
                {categories.filter((elem) => elem.id === props.categoryId).map(elem => 
                    <Category key={elem.category_name} 
                    category={elem.category_name}
                    id={elem.id}
                    categoryId={props.categoryId} 
                    setCategoryId={props.setCategoryId}
                    />
                )}
            </div>
        )
    } 
}

export default Categories;
