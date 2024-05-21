
function CardComponent({ nb, component }) {
    return(
        <div className="CardComponent">
            <span className="nb-card">{ nb }</span>
            <span className="component-card">{ component }</span>
        </div>
    )
}

export default CardComponent