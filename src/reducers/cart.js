const initialState = {
    items: [],
    checkoutStatus: null
}

/**
 * 对复杂数据类型进行再一次的拆分，保证每次返回一个新的数据
 * @param state
 * @param action
 * @returns {[]}
 */
const items = (state = initialState.items, action) => {
    return state
}

export default (state = initialState, action) => {
    return {
        items: items(state.items, action),
        checkoutStatus: state.checkoutStatus
    }
}