import CartContainer from "./containers/CartContainer";
import ProductsContainer from "./containers/ProductsContainer";

function App() {
    return (
        <div>
            <h1>Shopping Cart Example</h1>
            <hr/>
            <ProductsContainer/>
            <hr/>
            <CartContainer/>
        </div>
    );
}

export default App;
