import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    return(
        <nav>
            <div className='leftNav'>
                <a>Portfolio</a>
            </div>
            <div className='rightNav'>
                <a>Menus</a>
                <div className='navBurgerIcon'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </nav>
    )
}