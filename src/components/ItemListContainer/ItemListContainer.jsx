import { useAsync } from '../../hooks/useAsync'
import ItemList from '../ItemList/ItemList'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'
import classes from './ItemListContainer.module.css'

const MemoizedItemList = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const asyncFunction = () => getProducts(categoryId)

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }

    if(products.length === 0) {
        return <h1>No existen productos para esta categoria</h1>
    }

    return (
        <div>
            <h1 className={`${classes.color}`}>{!categoryId ? greeting: (greeting + categoryId)}</h1>
            <MemoizedItemList products={products}/>
        </div>
    )
}

export default ItemListContainer