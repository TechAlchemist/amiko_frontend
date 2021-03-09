import { Link } from 'react-router-dom';

const NavBar = (props) => {
    
    return (
        <div>
            <ul>
                <li> <Link to='/'> Home </Link> </li>
                <li> <Link to='/browse'> Merchandise </Link> </li>
                <li> <Link to='/sell'> Sell Antique </Link> </li>
            </ul>
        </div>
    );
}

export default NavBar;