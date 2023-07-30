import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import css from './Category.module.css';

function Category(props) {

    let path = '/categories/' + props.id;

    const handleClick = () => {
        props.setCategoryId(props.id);
    }
    
    return (
        <>
            <Button variant="outline-info" onClick={handleClick}>
                <Link to={ path }>{props.category}</Link>            
            </Button>
        </>
    )
}

export default Category;
