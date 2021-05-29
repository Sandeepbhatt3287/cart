import React from 'react';

// chaging into functional component
const CartItem =(props) => {

          
        // defining variables
        const {price,title,qty,} = props.product;

        // using this.props
        const {
            product,
            onDecreaseQuantity,
            onIncreaseQuantity,
            onDeleteProduct
        } = props ;
        return(

            <div className="cart-item">
                <div className="left-block">
                     < img style={styles.image} />
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
                         onClick= {()=> onIncreaseQuantity(product)}
                         />
                        <img
                         alt="Decrease" 
                         className="action-icons" 
                         src="https://image.flaticon.com/icons/png/128/2569/2569198.png"
                         onClick={()=>onDecreaseQuantity(product)}
                         />
                        <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/128/3221/3221897.png"
                        onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    
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