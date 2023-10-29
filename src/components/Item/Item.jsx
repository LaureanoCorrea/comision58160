import { Link, useNavigate } from "react-router-dom"
import "./item.css";
import PropTypes from "prop-types";

const Item = ({ id, name, img, price }) => {
    // const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    return (
        <div className="item" onClick={handleClick} style={{ marginBottom: 50}}>
            <h1>{name}</h1>
            <img src={img} style={{ width: 200}}/>
            <h2>${price}</h2>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}
Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Item