import cart from './assets/carrito.png';
import {useCart} from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import classes from './CartWidget.module.css'; 
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return (
        <Link to='/Cart' className='{classes.cartButton}' style= {{display: totalQuantity> 0 ? 'block' : 'none'}} onClick={() => navigate('/Cart')}>
        <img src={cart} alt="Carrito" className={classes.cartImage}/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget