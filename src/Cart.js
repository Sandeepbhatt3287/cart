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

    // To increase the quantity 
    handleIncreaseQuantity =(product)=>{

   console.log('Heyy please inc the qty of ',product);
        const{products}=this.state;
   const index = products.indexOf(product);
   products[index].qty +=1;

   this.setState({
       products
   })
    }
    // taking care of decrease quantity
    handleDecreaseQuantity = (product)=>{
        console.log('Decrease the quantity of ', product);
        const{products}=this.state;
        const index = products.indexOf(product);

        if(products[index].qty===0){
            return;
        }
        products[index].qty -=1;

        this.setState({
            products
        })
        
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
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                 />
                 )
            })}
        </div>
    );

    }

}

export default Cart;