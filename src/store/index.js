import {createStore, combineReducers} from 'redux'
import products from "../reducers/products";
import cart from "../reducers/cart";

const rootReducer = combineReducers({
    products,
    cart
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store