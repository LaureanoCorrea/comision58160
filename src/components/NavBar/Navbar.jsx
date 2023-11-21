import classes from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, useNavigate } from "react-router-dom";
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate();

useEffect(() =>{
  const categoriesRef = query(collection(db, 'categories'), orderBy('order'))

  getDocs(categoriesRef)
    .then(querySnapshot => {
      const categoriesAdapted = querySnapshot.docs.map(doc => {
        const fields = doc.data()
        return { id: doc.id, ...fields}
      })

    setCategories(categoriesAdapted)
  })
}, [])

  return (
    <nav className={classes.container}>
      <h1 onClick={() => navigate("/")}>Sembradores</h1>
      <div className="{classes.navLinks}">
        {
          categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? classes.active : ''}> {cat.name}</NavLink>)
        }
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
