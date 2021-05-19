const initialState = {
    all: []
}

const all = (state = initialState.all, action) => {
    switch (action.type) {
        case 'RECIVE_PRODUCTS':
            return action.products
        default:
            return state
    }
}

export default (state = initialState, action) => {
    return {
        all: all(state.all, action)
    }
}