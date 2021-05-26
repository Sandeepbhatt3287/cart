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
    }
    render(){

        // defining variables
        const {price,title,qty,img} = this.state;
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
                        <img alt="Increase" className="action-icons" src="https://image.flaticon.com/icons/png/512/1828/1828817.png"/>
                        <img alt="Decrease" className="action-icons" src="https://image.flaticon.com/icons/png/128/2569/2569198.png"/>
                        <img alt="Delete" className="action-icons" src="https://image.flaticon.com/icons/png/128/3221/3221897.png"/>
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