import { Link } from 'react-router-dom'

function StockPrice ({symbol, price}) {
    return (
        <div>
            <br/>
            <Link to={`/stocks/${symbol}`}>
            <h3>Symbol: {symbol}</h3>
            </Link>
            <h4>Price: ${price}</h4>
        </div>
    )
}

export default StockPrice
 