import React, { Component } from 'react'
import aspPhoto from '../assets/asp.jpg'
import aspPhoto2 from '../assets/asp2.jpg'
import masina from '../assets/masina.jpg'
import canapea from '../assets/canapea.jpg'
// import '../App.css';

export const DataContext=React.createContext();

export class DataProvider extends Component{
    state={
        products:[
            {
                "id":"1",
                "title":"Aspirator LG",
                "src":aspPhoto,
                "Description":"Aspirator de inalta calitate, 50W.",
                "Content":"Unul dintre cele mai bune aspiratoare de pe piata.",
                "price":"250",
                "culori":["negru","rosu","alb"],
                "count":1
            },
            {
                "id":"2",
                "title":"Aspirator Phillips",
                "src":aspPhoto2,
                "Description":"Aspirator de inalta calitate, 70W.",
                "Content":"Unul dintre cele mai bune aspiratoare de pe piata.",
                "price":'300',
                "culori":["alb","albastru","negru"],
                "count":1
            },
            {
                "id":"3",
                "title":"Masina de spalat",
                "src":masina,
                "Description":"Masina de spalat de inalta calitate, 200W.",
                "Content":"Unul dintre cele mai bune aspiratoare de pe piata.",
                "price":"250",
                "culori":["alb"],
                "count":1
            },
            {
                "id":"4",
                "title":"Canapea",
                "src":canapea,
                "Description":"Canapea de catifea , de buna calitate.",
                "Content":"Unul dintre cele mai bune aspiratoare de pe piata.",
                "price":"700",
                "culori":["negru","rosu","alb"],
                "count":1
            },
        ],
        cart:[],
        total:0
    }

    addCart = (id) =>{
        const {products,cart}=this.state;
        const check=cart.every(item =>{
            return item.id !== id
        })

        if (check)
        {
            const data=products.filter(product => {
                return product.id === id
            })
            this.setState({cart: [...cart,...data]})
        }else {
            alert("Nu se poate adauga acelasi produs de 2 ori in cos !");
        }
    }

    reduction = id =>
    {
        const {cart}=this.state;
        cart.forEach(item =>{
            if(item.id === id)
            {
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart:cart});
        this.getTotal();
    }

    increase = id =>
    {
        const {cart}=this.state;
        cart.forEach(item =>{
            if(item.id === id)
            {
                item.count +=1;
            }
        })
        this.setState({cart:cart});
        this.getTotal();
    }

    removeProduct = id => {
        if(window.confirm("Do you want to delete this product ?"))
        {
            const {cart}=this.state;
            cart.forEach((item,index) =>{
            if(item.id === id)
            {
                cart.splice(index,1)
            }
            })
            this.setState({cart:cart});
            this.getTotal();
        }
        
    }

    getTotal = () =>{
        const {cart}=this.state;
        const res = cart.reduce((prev,item) =>
        {
            return prev + (item.price * item.count);
        },0)
        this.setState({total:res})
    }

    componentDidUpdate()
    {
        localStorage.setItem('dataCart',JSON.stringify(this.state.cart));
        localStorage.setItem('dataTotal',JSON.stringify(this.state.total));

    }

    componentDidMount()
    {
        const dataCart=JSON.parse(localStorage.getItem('dataCart'));
        if ((dataCart)!=null)
        {
            this.setState({cart:dataCart});
        }

        const dataTotal=JSON.parse(localStorage.getItem('dataTotal'));
        if ((dataTotal)!=null)
        {
            this.setState({total:dataTotal});
        }
    }



    render()
    {
        const {products,cart,total}=this.state;
        const {addCart,reduction,increase,removeProduct,getTotal}=this;
        return (
            <DataContext.Provider value={{products,addCart,cart,reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider;
