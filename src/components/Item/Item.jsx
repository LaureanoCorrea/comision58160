import { Link, } from "react-router-dom"
import "./item.css";

const Item = ({ id, name, img, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    return (
        <div className="item" onClick={handleClick} style={{marginBottom: 50}}>
            <h1>{name}</h1>
            <img src={img} style={{ width: 200}}/>
            <h2>${price}</h2>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item