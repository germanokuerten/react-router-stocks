function StockPrice (props) {
    return (
        <div>
            <br/>
            <h3>Symbol: {props.stock.symbol}</h3>
            <h4>Price: ${props.stock.price}</h4>
        </div>
    )
}

export default StockPrice
 