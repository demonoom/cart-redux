import {useEffect} from "react";

const Products = (props) => {
    const {products, getAllProducts} = props

    useEffect(() => {
        setTimeout(() => getAllProducts(), 1000)
    }, [])

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {
                    products.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Products
