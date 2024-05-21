import Product from "./product.jsx"
function Shopping( props ) {
    return(
        <div>
            <h1>{ props.title}</h1>
            <ul>
                <li>
                    <Product name="Oeufs" quantity="6"/>
                </li>
            </ul>
        </div>
    )
}

export default Shopping