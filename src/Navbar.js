import React from 'react';

// chaging into functional component

const Navbar= (props) => {
        
        return(

            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon}src="https://image.flaticon.com/icons/png/128/879/879815.png" alt="Navbar"/>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
                
            </div>
        );
}

const styles = {
    cartIcon:{
        height: 40,
         marginRight:30
    },
    nav:{
        height:70,
        background:'aqua',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        borderRadius :'20px'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius: '50%',
        padding:'4px 8px',
        position:'absolute',
        right: 15,
        top: -9
    }

}

export default Navbar;