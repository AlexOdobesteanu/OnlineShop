import React, { Component } from 'react'
import {DataContext} from './produse';
import imagine from '../assets/asp.jpg';

export class Detalii extends Component
{
    render()
    {
        console.log(this.props)
        return (
            <div>
                <br></br>
                <br></br>
                <h3 className="txt">Detalii obiect...</h3>
            </div>
        )
    }
}

export default Detalii;