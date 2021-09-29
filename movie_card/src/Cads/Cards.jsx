import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../assets/movie1.jpg';
import img2 from '../assets/movie2.jpg';
import img3 from '../assets/movie3.jpg';


class Cards extends Component{render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card imgsrc={img1} title="Padmavat"year="2020" rating="rating 4"/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img2} title="WAR"year="2020" rating="rating 4"/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img3} title="Padmavat2" year="2020" rating="rating 4"/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img1} title="Padmavat"year="2020" rating="rating 4"/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img2} title="WAR"year="2020" rating="rating 4"/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img3} title="Padmavat2" year="2020" rating="rating 4"/>
                    </div>
                </div>
            </div>
        );
    }

}


export default Cards;
