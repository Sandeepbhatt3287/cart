import React from 'react';

import Cart from './Cart';

import Navbar from './Navbar'



class App extends React.Component {
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
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pbaQaHlqJ5wdt300ROAooeuyOX-vLxipcg&usqp=CAU',
                    id:1
                },
                {
                    price:102,
                    title: 'Watch',
                    qty:1,
                    img: 'data:image/jpeg;base64,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',
                    id:2
                },
                {
                    price:103,
                    title: 'Phone',
                    qty:1,
                    img: 'data:image/jpeg;base64,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',
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
    handleDeleteProduct =(id)=> {
        const {products} = this.state;
        const items = products.filter((item)=> item.id !==id);   //[{}] arrey contains product
        this.setState({
            products:items
        })
    }


    getCartCount =()=> {
      const {products} = this.state;
      let count = 0;

      products.forEach((product)=>{
        count += product.qty;
      })

      return count;
    }


    // for total amount of product
    getCartTotal = () => {
      const { products } = this.state;

      let cartTotal = 0;

      products.map((product)=>{
        cartTotal = cartTotal + product.qty * product.price
      })
        return cartTotal;
    }

  render () {
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
     <Cart
     products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
     />
     <div>Total: {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
