import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

type NavbarProps = {
    toggleContactModal: () => void,
}


export default function Navbar({ toggleContactModal }: NavbarProps) {
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


    const toggleContactForm = (evt: React.MouseEvent<HTMLAnchorElement>) => {
        evt.preventDefault()
        toggleContactModal()
    }

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
                    {/* If the isNavOpen is true the thing on the left is added which here is the class otherwise the thing on the right is which here is just nothing */}
                    <a href='#home' className={`${isNavOpen ? 'hidden' : ''}`}>Ciaran's Portfolio</a>
                </div>
                <div className='rightNav'>
                    <div className='navBurgerIcon' onClick={openNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    {isNavOpen && (
                        <div className={`menuContent ${isNavOpen ? 'active' : ''}`}>
                            {/* We add in a # instead of a / so that we can route from section to section instead of page to page */}
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="" onClick={toggleContactForm}>Contact</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}