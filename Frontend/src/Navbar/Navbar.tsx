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
        // The value stored in the variable will either be true or false
        const shouldBeColored = window.scrollY > scrollThreshold;
        // We can then use that variable to decide if addClass should be true or false
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
                    <Link to={'/'} className={`${isNavOpen ? 'hidden' : ''}`}>Ciaran's Portfolio</Link>
                </div>
                <div className='rightNav'>
                    <div className='navBurgerIcon' onClick={openNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    {isNavOpen && (
                        <div className={`menuContent ${isNavOpen ? 'active' : ''}`}>
                            <Link to={'/SectionOne'}>About</Link>
                            <Link to={'/SectionOne'}>Projects</Link>
                            <Link to={'https://github.com/CiaranRG'}>Github</Link>
                            <a href="mailto:ciarangrant2@aol.co.uk">Contact</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}