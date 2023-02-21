import React from 'react';

class CartItem extends React.Component {
    render() {
        console.log(this.props)
        const { price, qty, img, title } = this.props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity } = this.props;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src={img} alt='shopping_item' />
                </div>
                <div style={{ fontSize: 25 }} className='right-block'>
                    <div>{title}</div>
                    <div>₹{price}</div>
                    <div id='qty'>Qty : {qty} item</div>
                    <div className='cart-item-actions'>
                        <img id='increase_quantity' alt="" src='https://cdn-icons-png.flaticon.com/512/992/992651.png' className='action-icons'
                            onClick={() => onIncreaseQuantity(product)}
                        ></img>
                        <img alt="" src='https://cdn-icons-png.flaticon.com/512/992/992683.png' className='action-icons'
                            onClick={() => onDecreaseQuantity(product)}
                        ></img>
                        <img alt="" src='https://cdn-icons-png.flaticon.com/512/2907/2907762.png' className='action-icons'
                            onClick={() => onDeleteQuantity(product.id)}
                        ></img>
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