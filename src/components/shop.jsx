import React,{Component} from 'react';
// import '../App.css';
import {Link} from 'react-router-dom';
import {DataContext} from './produse';
import aspPhoto from '../assets/asp.jpg'
import './shop.css';

export class Shop extends Component
{
    static contextType=DataContext;
    render()
    {
        const {products}=this.context;
        return (

            <div id="product">
                {
                    products.map(product => (
                        <div className="box" key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.src} alt=""/>
                            </Link>

                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                                </h3>
                                <span>
                                    {product.price} lei
                                </span>
                                <p>
                                    {product.Description}
                                </p>
                                <button onClick={()=>this.context.addCart(product.id)}>Adauga in cos</button>
                            </div>
                        </div>

                    ))
                }
            </div>
        )
    }
}

export default Shop;