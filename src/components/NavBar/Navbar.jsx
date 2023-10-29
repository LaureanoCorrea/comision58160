import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={classes.container}>
            <h1 onClick={() => navigate('/')}>Sembradores</h1>
            <section className='{classes.navLinks}'>
                <NavLink to='/category/perfumes' className={({ isActive }) => isActive ? classes.active : ''}>Perfumes</NavLink>
                <NavLink to='/category/cremas' className={({ isActive }) => isActive ? classes.active : ''}>Cremas</NavLink>
                <NavLink to='/category/aceites' className={({ isActive }) => isActive ? classes.active : ''}>Aceites</NavLink>
            </section>
            <CartWidget />
        </nav>
    )
} 

export default Navbar