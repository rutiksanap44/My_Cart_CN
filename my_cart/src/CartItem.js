import React from 'react';

class CartItem extends React.Component {
    render() {
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src='./kid_Shopping.jpg' alt='shopping_item' />
                </div>
                <div style={{ fontSize: 25 }} className='right-block'>
                    <div>Phone</div>
                    <div>₹ 99</div>
                    <div>Qty : 1 item</div>
                    <div className='cart-item-actions'>

                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 200,
        width: 300,
        borderRadius: 8
    }
}

export default CartItem;