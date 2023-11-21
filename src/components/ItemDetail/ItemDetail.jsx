import "./ItemDetail.css";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notification/NotificationContext";
import { Link, useNavigate } from "react-router-dom";

const InputCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const handleChange = (e) => {
    if (e.target.value <= stock) {
      setCount(e.target.value);
    }
  };

  return (
    <div className="addBox">
      <input type="number" onChange={handleChange} value={count} />
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const increment = () => { 
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  
  return (
    <div className="addBox">
      <button className="button" onClick={decrement}>
        -
      </button>
      <p>{count}</p>
      <button className="button" onClick={increment}>
        +
      </button>
      <button className="button" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
  const [inputType, setInputType] = useState('button');
  
  const ItemCount = inputType === 'button' ? ButtonCount : InputCount;
  
  const { addItem, isInCart } = useCart();
  const { setNotification } = useNotification();
  
  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id,
      name,
      img,
      price,
      quantity,
    };
    
    addItem(productToAdd);
    setNotification("success", `${quantity} ${name} agregado con exito`);
  };
  
  const navigate = useNavigate()
  
  return (
    <div className="itemDetailContainer">
      <div className="itemDetailContent">
      <button
          className="button"
          onClick={() => navigate(-1)}
        >
          Volver Atrás
        </button>
        <button
          className="button"
          onClick={() =>
            setInputType(inputType === "input" ? "button" : "input")
          }
          >
          Cambiar contador
        </button>
        <header>
          <p>Categoria: {category}</p>
        </header>
        <picture>
          <img
            src={img}
            alt={name}
            style={{
              width: "60%",
              boxShadow: "4px 4px 1px 0px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
            />
        </picture>
        <h2>{name}</h2>
        <section>
          <p className="negrita">{description}</p>
          <p>Stock: {stock}</p>
          <p className="negrita big">$ {price}</p>
        </section>
        <footer>
          {isInCart(id) ? (
            <Link to='/cart' className="button" >Finalizar Compra </Link>
            ) : (
              <ItemCount stock={stock} onAdd={handleOnAdd} />
              )}
        </footer>
      </div>
    </div>
  );
};

export default ItemDetail;
