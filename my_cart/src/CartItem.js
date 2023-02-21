import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: "Mobile Phone",
            qty: 1,
            img: './kid_Shopping.jpg'
        }
        this.testing();
    }

    testing() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve('done');
            },3000)
        });
        promise.then(() => {
            this.setState({qty : 1});
            console.log('state',this.state)
        });
    };

    increaseQuantity = () => {
        // this is one way to change the state property
        // this.setState({
        //     qty : this.state.qty + 1
        // });

        // second way to change the state
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            };
        }, () => {
            console.log(this.state)
        });
    };
    decreaseQuantity = () => {
        this.setState((prevState) => {
            if(prevState.qty > 0){
                return {
                    qty : prevState.qty - 1
                };
            }
        });
    };
    render() {
        const { price, qty, title, img } = this.props;
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
                            onClick={this.increaseQuantity.bind(this)}
                        ></img>
                        <img alt="" src='https://cdn-icons-png.flaticon.com/512/992/992683.png' className='action-icons'
                            onClick={this.decreaseQuantity.bind(this)}
                        ></img>
                        <img alt="" src='https://cdn-icons-png.flaticon.com/512/2907/2907762.png' className='action-icons'></img>
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