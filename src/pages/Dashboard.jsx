import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import StockPrice from './StockPrice'


function Dashboard () {

    const API_KEY = 'fae450aeeeaef90e058c98edfc4cae26'
    // const { symbol } = useParams()
    const url = `https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${API_KEY}`
    // API DOCS https://site.financialmodelingprep.com/developer/docs/most-actives-stock-market-data-free-api

                
    const [stock, setStock] = useState (null)
    
    const getStock = async () => {
        const data = await fetch(url).then(res => res.json())
        setStock(data)
        console.log(data)
    }

    useEffect(() => {
        getStock()
    }, [])

    const loaded = () => {

        const allStocks = stock.map(({symbol, price}, index) => {
        console.log(symbol, price)
        
        return (
            <div>
        
                <StockPrice 
                   
                    symbol={symbol}
                    price={price}
                    key={index}/>
            
            </div>
            )

        })
            return allStocks
    }
    

    const loading = () => <h1>loading 🚀🚀🚀</h1>

    return (
        stock ? loaded() : loading()
    )
}

export default Dashboard