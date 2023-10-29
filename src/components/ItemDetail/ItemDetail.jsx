import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import PropTypes from "prop-types";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const InputCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const handleChange = (e) => {
    if (e.target.value <= stock) {
      setCount(e.target.value);
    }
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={count} />
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if(count > 1){
        setCount(prev => prev -1)
    }
}

const increment = () => {
    if(count < stock){
        setCount(prev => prev + 1)
    }
  }

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
  const [inputType, setInputType] = useState("button");

  const ItemCount = inputType === "button" ? ButtonCount : InputCount;

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} ${name}`);
  };

  return (
    <div className="itemDetailContainer">
      <div className="itemDetailContent">
        <Link to="/" className="button">
          Volver a la lista de productos
        </Link>
        <button
          className="button"
          onClick={() =>
            setInputType(inputType === "input" ? "button" : "input")
          }
        >
          Cambiar contador
        </button>
        <header>
          <h2>{name}</h2>
        </header>
        <picture>
          <img src={img} alt={name} style={{ width: "70%" }} />
          {/* Ajusta el ancho de la imagen al 70% */}
        </picture>
        <section>
          <p>Categoria: {category}</p>
          <p>Descripción: {description}</p>
          <p>Precio: {price}</p>
          <p>Stock: {stock}</p>
        </section>
        <footer>
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        </footer>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  onAdd: PropTypes.func.isRequired,
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number, 
  id: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  img: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired, 
  description: PropTypes.string.isRequired, 
};

export default ItemDetail;
