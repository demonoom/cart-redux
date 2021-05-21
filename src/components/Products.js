import {useEffect} from "react";

const Products = (props) => {
    const {products, getAllProducts, handleAddToCart} = props


    useEffect(() => {
        setTimeout(() => getAllProducts(), 1000)
    },[getAllProducts])

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {
                    products.map(v => (
                        <li key={v.id}>
                            <span>{v.title} - {v.price} * {v.inventory}</span>
                            <br/>
                            <button disabled={!v.inventory} onClick={() => handleAddToCart(v)}>
                                {
                                    !v.inventory ? 'Sold out' : 'Add to cart'
                                }
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Products
