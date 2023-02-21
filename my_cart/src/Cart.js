import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    render() {
        return (
            <div className='CartDiv'>
                <CartItem qty={1} price={199} title={"HandBag"} img={'./kid_Shopping.jpg'} />
                <CartItem qty={1} price={999} title={"Watch"} img={'./kid_Shopping.jpg'} />
                <CartItem qty={1} price={239} title={"Bottle"} img={'./kid_Shopping.jpg'} />
            </div>
        )
    }
}

export default Cart;