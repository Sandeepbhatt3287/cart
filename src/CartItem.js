import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img></img>
                </div>
                <div className="right-block">
                    <div>Phone</div>
                    <div>Rs 1000</div>
                    <div>QTY:1</div>
                    <div className="cart-item-action">
                        {/* Buttons */}

                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;