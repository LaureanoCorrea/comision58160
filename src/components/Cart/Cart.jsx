import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, clearCart, totalQuantity, removeItem, total } = useCart();

  if (totalQuantity === 0) {
    return (
      <div className="cartInfo">
        <h1 className="noItems">No hay items en el carrito</h1>
        <Link to="/" className="button">
          {" "}
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart</h1>
      <div className="itemShopContent">
        {cart.map((prod) => {
          return (
            <div className="productContainer" key={prod.id}>
              <img className="productImage" src={prod.img} alt={prod.name} />
              <div className="productInfo">
                <h3 className="productName">{prod.name}</h3>
                <h4 className="productPrice">${prod.price}</h4>
              </div>
              <p className="productQuantity">Quantity: {totalQuantity}</p>
              <button
                className="removeButton"
                onClick={() => removeItem(prod.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <div className="totalSection">
        <p className="total">Total: ${total}</p>
        <button className="button" onClick={clearCart}>
          Clear Cart
        </button>
        <Link className="button" to="/checkout">
          Go to Checkout
        </Link>
        <Link className="button" to="/">
          Keep Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
