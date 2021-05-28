import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
     // defining constructor 
     constructor(){
        super();
        this.state ={
            // using rendering
            products: [
                {
                    price:101,
                    title: 'Laptop',
                    qty:1,
                    img: '',
                    id:1
                },
                {
                    price:102,
                    title: 'Watch',
                    qty:1,
                    img: '',
                    id:2
                },
                {
                    price:103,
                    title: 'Phone',
                    qty:1,
                    img: '',
                    id:3
                }
            ]
            
        }
        // this.increaseQuantity.bind(this);
        // this.testing();
    }
    render ()
    {  
        const { products } = this.state
        return(
        <div  className='cart'>
            {products.map((product)=>{
                return (
                <CartItem 
                product={product}
                 key ={product.id}
                 />
                 )
            })}
        </div>
    );

    }

}

export default Cart;