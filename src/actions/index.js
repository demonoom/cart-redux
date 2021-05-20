import * as shop from '../api/shop'

export const receiveProducts = products => ({
    type: 'RECIVE_PRODUCTS',
    products
})

export const addToCart = product => ({
    type: 'ADD_TO_CART',
    product
})

export const getAllProducts = () => {
    return function (dispatch) {
        shop.getAllProducts(res => {
            dispatch(receiveProducts(res))
        })
    }
}

export const handleAddToCart = (product) => dispatch => {
    dispatch(addToCart(product))
}
