import './MainPage.scss'
import ProjectPreview from '../Components/ProjectPreview/ProjectPreview'
import Modal from '../Components/Modal/Modal'
import ProjectDisplay from '../Components/ProjectDisplay/ProjectDisplay'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact, faGithub, faSass } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// Importing this so we can add it into our type definitions for the icons
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import ContactForm from '../Components/ContactForm/ContactForm'

type MainPageProps = {
    isContactModalOpen: boolean,
    toggleContactModal: () => void,
}

type ProjectData = {
    title: string;
    description: {
        intro: string,
        middle: string,
        tech: string,
    }
    imgUrl: string;
    codeLink: string;
    siteLink: string;
    icons?: IconDefinition[];
};

export default function MainPage({ isContactModalOpen, toggleContactModal }: MainPageProps) {
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState({ title: '', description: { intro: '', middle: '', tech: '' }, imgUrl: '', codeLink: '', siteLink: '' })

    const toggleProjectModal = () => {
        setIsProjectModalOpen(!isProjectModalOpen)
    }

    const handleProjectSelect = (projectData: ProjectData) => {
        setCurrentProject(projectData)
        console.log(projectData)
        toggleProjectModal()
    }

    return (
        <>
            <main className="mainPageContent">
                <section id='home' className='sectionHome'>
                    <div className='dummyDiv'></div>
                    <p className='homeHeader'>Ciaran Grant</p>
                    <p className='homeSubheader'>Fullstack Web Developer</p>
                    <div className='homeLogos'>
                        <Link className='homeGithub' to={'https://github.com/CiaranRG?ocid=AIDcmm153qff2f_SEM__k_Cj0KCQjwk6SwBhDPARIsAJ59Gwcll4CWUlwSWoFr8lTOJ5-y5sVVzcp4928L7QKFYMgl_H4HE3lb-NYaAsKDEALw_wcB_k_'}><FontAwesomeIcon icon={faGithub} /></Link>
                        <button className='homeEmail' onClick={toggleContactModal}><FontAwesomeIcon icon={faEnvelope} /></button>
                    </div>
                </section>
                <section id='about' className='sectionAbout'>
                    <div className='dummyDiv'></div>
                    <h1>About Me</h1>
                    <br />
                    <p>
                        Hello! I'm a web developer with a foundational passion rooted in technology, sparked by an early interest in computers and video games. The initial desire to create games opened the door to the broader world of programming, leading me to the fascinating field of web development.
                    </p>
                    <br />
                    <p>
                        I embarked on this journey with Harvard's CS50 course, which laid the groundwork in computer science principles. Eager to dive deeper, I completed a comprehensive Udemy course in web development, honing my skills for full-stack projects. I have a hands-on approach to learning, crafting projects that emulate real-world websites to understand the work I aim to pursue. Through these projects, I've become proficient in technologies like HTML, CSS, JavaScript, React for the front end, and Node.js, Express, and PostgreSQL for the back end, equipping me to manage user accounts and render backend data effectively.
                    </p>
                    <br />
                    <p>
                        While my heart lies in front-end development—where I can unleash my creativity to craft intuitive user experiences—I also find the backend's complexities intriguing. Achieving the perfect blend of functionality and aesthetics is my ultimate goal for each project.
                    </p>
                    <br />
                    <p>
                        Moving forward, I aspire to develop top-level industry web applications, complete with all the bells and whistles. I'm also keen on expanding my knowledge in web security and becoming versatile in various technologies to adapt to any situation. To stay at the cutting edge, I engage with tech communities on Reddit, YouTube, and Twitter.
                    </p>
                    <br />
                    <p>
                        My journey in web development has been a profound learning experience, and I take pride in every step. I'm excited about the future and the opportunities it holds.
                    </p>
                </section>
                <section id='projects' className='sectionProjects'>
                    <div className='dummyDiv'></div>
                    <ProjectPreview imgUrl={'https://raw.githubusercontent.com/CiaranRG/PortfolioSite/main/Frontend/public/WebsitePictures/SwapiApp.jpg'}
                        title={'Star Wars Api App'} description={'An app used to search for info about any star wars character from the swapi api'}
                        onClick={() => handleProjectSelect({
                            title: 'Star Wars Api App',
                            description: {
                                intro: 'This app queries the SWAPI api to display Star Wars information.',
                                middle: 'This was my first real project after having reached the point I felt I needed to start making websites, Its a fully frontend application that interacts with the SWAPI api, it queries the api for things such as characters or planets etc, it also has added search functionality as the list can get quite long.',
                                tech: 'The tech used here is quite light compared to some of my later projects but it does make use of Typescript and React, MaterialUI was also used to help with styling as I felt I needed to get an understanding on how these technologies worked.'
                            },
                            imgUrl: 'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            codeLink: 'https://github.com/CiaranRG/StaticSWAPISite',
                            siteLink: 'https://static-swapi-site.vercel.app',
                            icons: [faReact, faGithub],
                        })}
                    />
                    <ProjectPreview imgUrl={'https://raw.githubusercontent.com/CiaranRG/PortfolioSite/main/Frontend/public/WebsitePictures/restaurantApp.jpg'}
                        title={'Restaurant App'} description={'Mock restaurant website with account/reservation CRUD'}
                        onClick={() => handleProjectSelect({
                            title: 'Restaurant App',
                            description: {
                                intro: 'This project is supposed to emulate a real world website you would see for a restaurant.',
                                middle: 'The goal with this was to allow for people to be able to make accounts aswell as reservations to which they could then manage those reservations from within their account as well as other account settings.',
                                tech: 'When it came to the tech that was used its much the same as my other projects, React and NodeJS with Typescript for type safety, the backend database being provided by PostgreSQL and SASS handling our CSS styling, Github was used for version control as well as some use case technology like BCrypt/Axios etc.'
                            },
                            imgUrl: '../../public/WebsitePictures/restaurantApp.jpg',
                            codeLink: 'https://github.com/CiaranRG/RestaurantApp',
                            siteLink: 'https://bella-cucina-frontend.vercel.app',
                            icons: [faReact, faNodeJs, faGithub, faDatabase, faSass],
                        })}
                    />
                    <ProjectPreview imgUrl={'https://raw.githubusercontent.com/CiaranRG/PortfolioSite/main/Frontend/public/WebsitePictures/ecommerceApp.jpg'}
                        title={'Ecommerce App'} description={'Meant to simulate a real world clothing shop website'}
                        onClick={() => handleProjectSelect({
                            title: 'Ecommerce App',
                            description: {
                                // 70 Characters
                                intro: 'This is an ecommerce app meant to simulate a real world clothing site.',
                                // 106 Characters
                                middle: 'I wanted to add in as much as I could to make it feel like something you would see by any big corporation.',
                                // 231 Characters
                                tech: 'This was made in React with Vite and the backend was built with NodeJS, For our database we used PostgreSQL with SCSS being the main package for dealing with our styles, other niche use packages such as BCrypt/Axios/FontAwesome etc.'
                            },
                            imgUrl: '../../public/WebsitePictures/ecommerceApp.jpg',
                            codeLink: 'https://github.com/CiaranRG/EcommerceApp',
                            siteLink: 'https://ecommerce-app-frontend-seven.vercel.app',
                            icons: [faReact, faNodeJs, faGithub, faDatabase, faSass],
                        })}
                    />
                </section>
            </main>
            <Modal isOpen={isProjectModalOpen} toggleModal={toggleProjectModal}><ProjectDisplay projectInfo={currentProject} /></Modal>
            <Modal isOpen={isContactModalOpen} toggleModal={toggleContactModal}><ContactForm /></Modal>
        </>
    )
}