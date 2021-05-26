import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color: '#777'}}>Rs 1000</div>
                    <div style={{color: '#777'}}>QTY:1</div>
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