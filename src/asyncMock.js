const products = [
    {
        id:'1',
        name: 'Andador tijera',
        price: 1000,
        category: 'andador',
        img: 'https://emsur.com.ar/wp-content/uploads/2021/04/andador-tijera-cano-1.jpg',
        stock: 20,
        description: 'Andador Tijera plegable con ruedas'
    },
    { id:'2', name: 'Baston Aluminio', price: 500, category:'baston', img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/619/750/products/baston-aluminio1-8e571af1b4ae201a6f15220752356960-640-0.jpg', stock: 15, description:'Baston extensible de aluminio'},
    { id:'3', name: 'Baston Madera', price: 400, category:'baston', img: 'https://www.silfab.com.ar/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/b/9/b900m_1.jpg', stock: 10, description:'Baston de madera'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}