import * as types from '../constants/ActionTypes'

const initialState = {
    // {id:'商品id'，quantity:'数量'}
    items: [],
    //null  successful  failed
    checkoutStatus: null
}

/**
 * 对复杂数据类型进行再一次的拆分，保证每次返回一个新的数据
 * @param state
 * @param action
 * @returns {[]}
 */
const items = (state = initialState.items, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            const productId = action.product.id
            const product = state.find(item => item.id === productId)
            if (product) {
                product.quantity++
                return [...state]
            } else {
                return [...state, {
                    id: productId,
                    quantity: 1
                }]
            }
        case types.SET_ITEMS:
            return action.items
        default:
            return state
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CHECKOUT_STATUS:
            return {
                ...state,
                checkoutStatus: action.status
            }
        default:
            return {
                items: items(state.items, action),
                checkoutStatus: state.checkoutStatus
            }
    }
}