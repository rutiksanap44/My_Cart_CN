import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import "firebase/database";
import firebase from "firebase/compat/app"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db.collection("products")
      .where('price', '>', 0)
      .orderBy('price', 'desc')
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({
          products: products,
          loading: false
        })
      });
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef.update({
      qty: products[index].qty + 1
    }).then(() => {
      console.log('Document Updated Successfully')
    }).catch((error) => {
      console.log("Error", error);
    })
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    const docRef = this.db.collection("products").doc(products[index].id);
    if (products[index].qty > 0) {
      docRef.update({
        qty: products[index].qty - 1
      }).then(() => {
        console.log('Document Updated Successfully')
      }).catch((error) => {
        console.log('Error', error)
      })
    } else {
      console.log('Cannot Descrease the Quantity');
    }
  };
  handleDeleteItem = (id) => {
    const docRef = this.db.collection("products").doc(id);
    docRef.delete()
      .then(() => {
        console.log('Deleted Successfully')
      }).catch((error) => {
        console.log('Error', error);
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

  addProduct = () => {
    this.db.collection("products").add({
      img: 'https://media.croma.com/image/upload/v1664421002/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/257199_0_tx35xr.png',
      price: 900,
      qty: 4,
      title: "Washing Machine"
    }).then((docRef) => {
      console.log('Product has been Added', docRef);
    }).catch((error) => {
      console.log(error);
    })
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <NavBar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontsize: 20 }}>Add a Product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteItem}
        />
        {loading && <h1>Loading Products</h1>}
        <div style={{ fontSize: 20 }}>Total : {this.getCartTotalPrice()}</div>
      </div>
    );
  }
}
export default App;
