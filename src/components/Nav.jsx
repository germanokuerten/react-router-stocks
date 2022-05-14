import { Link } from 'react-router-dom'

function Nav () {
    return (
        <div className="nav">
            <Link to={'/'}>
                <div>MoonStocks</div>
            </Link>

            <Link to={'/stocks'}>
                <div >Dashboard</div>
            </Link>

            <Link to={'/about'}>
                <div >
                    About
                </div>            
            </Link>

        </div>
    )
}

export default Nav