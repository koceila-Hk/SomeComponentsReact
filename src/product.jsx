function Product({name, quantity}) {
    return (
        <div className="product">
            <span className="product-name">{name}</span>
            <span className="product-quantity">{quantity}</span>
        </div>
    )
}

export default Product