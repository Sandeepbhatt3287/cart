import React from 'react';

class Navbar extends React.Component{
   
       render(){
         
        return(

            <div className="">
                <div>
                    <img src="https://image.flaticon.com/icons/png/128/879/879815.png" alt="Navbar"/>
                    <span>3</span>
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

export default Navbar;