import React from 'react';
import './Card-style.css';
const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.year} 
                </p>
                <h5 className="rating">{props.rating}</h5>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>
    );
}

export default Card;