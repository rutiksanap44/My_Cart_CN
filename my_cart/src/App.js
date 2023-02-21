import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [{
        price: 1299,
        qty: 1,
        img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: "Watch",
        id: 1
      }, {
        price: 799,
        qty: 1,
        img: 'https://images.unsplash.com/photo-1566150905968-62f0de3d6df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhhbmRiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: "Handbag",
        id: 2
      }, {
        price: 49999,
        qty: 1,
        img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
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
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotalPrice = () => {
    const { products } = this.state;
    let price = 0;
    products.map((product) => {
      price = price + product.qty*product.price;
    });
    return price;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <NavBar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteItem}
        />
        <div style={{fontSize:20}}>Total : {this.getCartTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
