import Item from "../Item/Item";
import PropTypes from "prop-types";


const ItemList = ({ products }) => {
  return (
    <div className="item-container" onClick={() => console.log("click en itemlist")}>
      {products.map((prod) => {
        return <Item key={prod.id} {...prod} />;
      })}
    </div>
  );
};

ItemList.propTypes = {
  products: PropTypes.array.isRequired, // Valida que "products" sea un array y sea requerido
};

export default ItemList;
