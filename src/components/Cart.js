import React, {Component} from "react";

class Cart extends Component {

    render() {
        const {cartProducts, totalPrice, checkout, checkoutStatus} = this.props
        return (
            <div>
                <h2>Cart</h2>
                <ul>
                    {
                        cartProducts.map(item => (
                            <li key={item.id}>
                                {item.title} - {item.price} * {item.quantity}
                            </li>
                        ))
                    }
                </ul>
                <h2>TotalPrice:{totalPrice}</h2>
                {!cartProducts.length && <p>Please add some products to cart.</p>}
                <button disabled={!cartProducts.length} onClick={() => checkout(cartProducts)}>Checkout</button>
                <br/>
                {checkoutStatus && <p>Checkout {checkoutStatus}</p>}
            </div>
        )
    }
}

export default Cart