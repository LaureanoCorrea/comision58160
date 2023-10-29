const products = [
    { id: '1', name: 'Aceite de Menta', price: 1200, category: 'aceites', img:'../src/images/aceite-menta.png', stock: 10, description:'Aceite Esencial Menta'},
    { id: '2', name: 'Aceite Anti Stress', price: 1200, category: 'aceites', img:'../src/images/aceite-anti-stress.png', stock: 16, description:'Aceite esencial Anti Stress'},
    { id: '3', name: 'Oleo 31 Aceites Esenciales', price: 3200, category: 'aceites', img:'../src/images/oleo-31-aceites.png', stock: 34, description:'Aceite Esencial 31 Elementos'},
    { id: '4', name: 'Mascara capilar Vespero', price: 1200, category: 'cremas', img:'../src/images/mascara-capilar.png', stock: 0, description:'Mascara para el pelo efecto rejuvenecedor'},
    { id: '5', name: 'Crema Corporal Hidratante', price: 3000, category: 'cremas', img:'../src/images/crema-blush.png', stock: 21, description:'Crema Corporal efecto ultra hidratante Blush'},
    { id: '6', name: 'Shampoo Original', price: 2200, category: 'cremas', img:'../src/images/shampoo-original.png', stock: 33, description:'Shampoo Original, Apto para todo pelo y sin pelo tambien'},
    { id: '7', name: 'Invictus eau de parfum', price: 100000, category: 'perfumes', img:'../src/images/Invictus.png', stock: 25, description:'Perfume Invictus para hombre'},
    { id: '8', name: 'Good Girl eau de parfum', price: 12000, category: 'perfumes', img:'../src/images/Good-Girl.png', stock: 36, description:'Perfume Good Girl para mujer'},
    { id: '9', name: 'One Million eau de parfum', price: 14000, category: 'perfumes', img:'../src/images/One-Million.png', stock: 16, description:'Perfume One Million para hombre'},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}