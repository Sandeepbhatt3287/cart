import React from 'react';

class CartItem extends React.Component{
    // defining constructor 
    constructor(){
        super();
        this.state ={
            price:10000,
            title: 'Mobile Phone',
            qty:1,
            img: ''
        }
        // this.increaseQuantity.bind(this);
        // this.testing();
    }

    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },3000);
    //     })
    //     promise.then(()=>{
    //         // setState acts like a synchronus call
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});
    //         console.log('state',this.state);
    //     });
    //  } 
    // using arrow function
     increaseQuantity =()=> {
        //  console.log('this',this.state);

        // setstate form 1
        this.setState({
            qty: this.state.qty + 1
        },()=>{});    //adding callback
    
        // setstate form 2 -if prevstate requied use this
        // this.setState((prevState)=>{
        //     return {
        //         qty: prevState.qty +1
        //     }
        // });

    }

    // decreasing the Quantity
    decreaseQuantity = ()=>{
        const{qty} = this.state;
        if(qty===0){
            return;
        }
        this.setState({
            qty:this.state.qty-1
        });
    }

       render(){
          console.log('this.props', this.props);
        // defining variables
        const {price,title,qty,} = this.props;
        return(

            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Quantity: {qty}</div>
                    <div className="cart-item-action">
                        {/*  Adding Buttons */}
                        <img 
                        alt="Increase"
                         className="action-icons" 
                         src="https://image.flaticon.com/icons/png/512/1828/1828817.png"
                         onClick= {this.increaseQuantity}
                         />
                        <img
                         alt="Decrease" 
                         className="action-icons" 
                         src="https://image.flaticon.com/icons/png/128/2569/2569198.png"
                         onClick={this.decreaseQuantity}
                         />
                        <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/128/3221/3221897.png"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height: 110,
        width:110,
        borderRadius:4,
        background:'blue'
    }
}

export default CartItem;