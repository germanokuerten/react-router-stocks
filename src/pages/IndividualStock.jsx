import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function IndividualStock () {
    
    const { symbol } = useParams()
    console.log(symbol)

    const API_KEY = 'fae450aeeeaef90e058c98edfc4cae26'
    
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${API_KEY}`

    const [indStock, setIndStock] = useState (null)

    const getIndStock = async () => {
        const data = await fetch(url).then(res => res.json())
        setIndStock(data[0])
    }

    useEffect(() => {
        getIndStock()
    }, [])

    console.log(indStock)

    return (
        <div>
            <h1> {indStock?.symbol} </h1>
            <h1> {indStock?.price} </h1>
        </div>
    )
}

export default IndividualStock