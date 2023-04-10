import React,{Component} from 'react';
import './shop.css';
import '../App.css';
import {DataContext} from './produse';
import {Link} from 'react-router-dom';

export class shopCart extends Component
{
    static contextType=DataContext;
    
    componentDidMount()
    {
        this.context.getTotal();
    }
    
    render()
    {
        const {cart,increase,reduction,removeProduct,total}=this.context;
        

        if(cart.length===0)
        {
            return <h2 style={{textAlign:"center"}}>Nu sunt produse in cos !</h2>
        }
        else{
            return (
                <div id="product">
                {
                    cart.map(item => (
                        <div className="box2" key={item.id}>
                            <img src={item.src} alt=""/>
                            <div className="content">
                                <h2>{item.title}</h2>
                                <span>{item.count * item.price} lei</span>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div>
                                    <button className="count" onClick={() => reduction(item.id)}> - </button>
                                    <span>{item.count}</span>
                                    <button className="count" onClick={() => increase(item.id)}> + </button>
                                </div>
                            </div>
                            <button className="delete" onClick={()=>removeProduct(item.id)}>STERGE PRODUS</button>
                        </div>
                    ))
                }
                <div classname="total">
                    <button className="delete">
                        <Link to='/payment'>
                        <li className='b'>PLATITI</li>
                        </Link>
                    </button>
                    <h3>TOTAL: {total} lei</h3>
                </div>
    
                </div>
            );

        }
    
        
    }
}

export default shopCart;