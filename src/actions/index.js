import * as shop from '../api/shop'
import * as types from '../constants/ActionTypes'

export const receiveProducts = products => ({
    type: types.RECIVE_PRODUCTS,
    products
})

export const addToCart = product => ({
    type: types.ADD_TO_CART,
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

export const setCheckoutStatus = status => ({
    type: types.SET_CHECKOUT_STATUS,
    status
})

export const setCartItems = items => ({
    type: types.SET_ITEMS,
    items
})

export const checkout = (products) => dispatch => {
    //备份商品
    const savedCartProducts = [...products]
    //清空结算状态
    dispatch(setCheckoutStatus(null))
    //清空购物车
    dispatch(setCartItems([]))
    //执行结算操作
    shop.buyProducts(
        products,
        () => dispatch(setCheckoutStatus('successful')),
        () => {
            dispatch(setCheckoutStatus('failed'))
            dispatch(setCartItems(savedCartProducts))
        }
    )
    //  成功 设置结算状态成功
    //  失败 设置结算状态失败，还原购物车数据
}


