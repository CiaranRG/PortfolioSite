import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    // State to hold if the burger nav is open or closed
    const [isNavOpen, setIsNavOpen] = useState(false)
    // Creating a add class state to toggle classes on or off
    const [addClass, setAddClass] = useState(false)
    // Create a function to toggle the burger nav list to the opposite of what it currently is
    const openNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    // Function to handle scroll and close menu
    const handleScroll = () => {
        // Top 5% of the viewport height
        const scrollThreshold = window.innerHeight * 0.005;
        const shouldBeColored = window.scrollY > scrollThreshold;
    
        setAddClass(shouldBeColored);
    };
    

    useEffect(() => {
        // Setup an event listener, the event being scroll and then the function to execute
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <nav className={`menuContent ${addClass ? 'addBackground' : ''}`}>
            <div className='navDiv'>
                <div className='leftNav'>
                    <a>Portfolio</a>
                </div>
                <div className='rightNav'>
                    <div className='navBurgerIcon' onClick={openNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    {isNavOpen && (
                        <div className={`menuContent ${isNavOpen ? 'active' : ''}`}>
                            <Link to={'/SectionOne'}>Home</Link>
                            <Link to={'/SectionOne'}>Projects</Link>
                            <Link to={'/SectionOne'}>Contact</Link>
                            <Link to={'/SectionOne'}>About</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}