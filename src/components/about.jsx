import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import store from '../assets/store.jpg';

function About()
{
    return (
    <div>
        <br></br>
        <div className="title">
        <h3>eCasa</h3>
        </div>
        <br></br>
        <br></br>
        <div className="txt2">
        AM DESCHIS SI IN BUCURESTI,SECTORUL 3 !<br></br>
        </div>
        <div>
            <br></br>
            <img src={store}></img>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div>
            <br></br>
            Contact:+40754679210
            <br></br>
            <br></br>
            <br></br>
        </div>
    </div>
        
    );
}

export default About;