import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function Recipe(props) {
    let path = '/recipeItem/' + props.id;

    function handleClick() {
        props.setPathRecipe(path);
    }

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{ props.title }</Card.Title>
                    {/* <Card.Text>
                        {props.text}
                    </Card.Text> */}
                    <Button variant="primary" onClick={handleClick}>
                        <Link to={path}>Смотреть</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Recipe;
