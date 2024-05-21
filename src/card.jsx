import CardComponent from "./cardComponent"

function Card( props ){
    return(
        <div>
            <h1>{ props.title }</h1>
            <ul>
                <li>
                    <CardComponent nb="2" component="couer"/>
                </li>
            </ul>
        </div>
    )
}

export default Card