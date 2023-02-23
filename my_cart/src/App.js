import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import "firebase/database";
import firebase from "firebase/compat/app"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db.collection("products").onSnapshot(snapshot => {
      // console.log(snapshot)
      const products = snapshot.docs.map(doc => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({
        products : products
      })
    });
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
      price = price + product.qty * product.price;
      return '';
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
        <div style={{ fontSize: 20 }}>Total : {this.getCartTotalPrice()}</div>
      </div>
    );
  }
}
export default App;
