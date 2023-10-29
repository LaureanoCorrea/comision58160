import cart from './assets/carrito.png';
import classes from './CartWidget.module.css'; 


const CartWidget = () => {
    return (
        <button className='{classes.cartButton}'>
        <img src={cart} alt="Carrito" className={classes.cartImage}/>
        <span className={classes.cartCount}>Carrito: 0</span>
        </button>
    )
}

export default CartWidget