import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar() {
    // State to hold if the burger nav is open or closed
    const [isNavOpen, setIsNavOpen] = useState(false)
    // Create a function to toggle the burger nav list to the opposite of what it currently is
    const openNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <nav>
            <div className='leftNav'>
                <a>Portfolio</a>
            </div>
            <div className='rightNav'>
                {/* <p>Menus</p> */}
                <div className='navBurgerIcon' onClick={openNav}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                {isNavOpen && (
                <div className={`menuContent ${isNavOpen ? 'active' : ''}`}>
                    <a href="">Home</a>
                </div>
            )}
            </div>
        </nav>
    )
}