import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [{
                price: 1299,
                qty: 1,
                img: './kid_Shopping.jpg',
                title: "Watch",
                id: 1
            }, {
                price: 799,
                qty: 1,
                img: './kid_Shopping.jpg',
                title: "Handbag",
                id: 2
            }, {
                price: 49999,
                qty: 1,
                img: './kid_Shopping.jpg',
                title: "Laptop",
                id: 3
            }
            ]
        }
    }
    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products
        })
    };
    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        const qtytemp = products[index].qty;
        if (qtytemp > 0) {
            products[index].qty -= 1;
        }
        this.setState({
            products
        })
    };
    handleDeleteItem = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);

        this.setState({
            products : items
        })
    }
    render() {
        const { products } = this.state;
        return (
            <div className='CartDiv'>
                {products.map((product) => {
                    return <CartItem product={product}
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteQuantity={this.handleDeleteItem}
                    />
                })}
            </div>
        )
    }
}

export default Cart;