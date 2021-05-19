import * as shop from '../api'

export const receiveProducts = products => ({
    type: 'RECIVE_PRODUCTS',
    products
})

export const getAllProducts = dispatch => {
    shop.getAllProducts(products => {
        dispatch(receiveProducts(products))
    })
}