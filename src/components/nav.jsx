import React,{Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import cartIcon from '../assets/cart.png';
import {DataContext} from './produse';

export class Nav extends Component
{
    static contextType = DataContext;
    // const mystyle = {
    //     color:black
    // };
    state = {
        toggle:false
    }


    render()
    {
        const {cart}=this.context;


        return (
            <nav>
                <h3>eCasa</h3>
                <ul className="nav-links">

                    <Link  to='/mainpage'>
                    <li className='b'>PAGINA PRINCIPALA</li>
                    </Link>
                    

                    <Link  to='/shop'>
                    <li className='b'>SHOP</li>
                    </Link>
                    

                    <Link  to='/Magazine'>
                    <li className='b'>MAGAZINE</li>
                    </Link>

                    <Link  to='/Login'>
                    <li className='b'>LOGIN/REGISTER</li>
                    </Link>

                    <Link  to='/About'>
                    <li className='b'>DESPRE NOI</li>
                    </Link>


                    
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to='/Cart'>
                            <img src={cartIcon} alt='' width="20"/>
                        </Link>

                    </div>

                    
                </ul>
            </nav>

        );
    }
}

export default Nav;