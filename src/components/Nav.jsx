import { Link } from 'react-router-dom'

function Nav () {
    return (
        <div className="nav">
            <Link to={'/'}>
                <div>MoonStocks</div>
            </Link>

            {/* <Link>
                <div to={'/stocks'}>Dashboard
                </div>
            </Link>

            <Link>
                <div to={'/about'}>
                    About
                </div>            
            </Link> */}

        </div>
    )
}

export default Nav