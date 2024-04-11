import './MainPage.scss'
import ProjectPreview from '../Components/ProjectPreview/ProjectPreview'
import Modal from '../Components/Modal/Modal'
import ProjectDisplay from '../Components/ProjectDisplay/ProjectDisplay'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact, faGithub, faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
// Importing this so we can add it into our type definitions for the icons
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export default function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState({ title: '', description: '', imgUrl: '', codeLink: '' })

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    type ProjectData = {
        title: string;
        description: string;
        imgUrl: string;
        codeLink: string;
        icons?: IconDefinition[];
    };

    const handleProjectSelect = (projectData: ProjectData) => {
        setCurrentProject(projectData)
        console.log(projectData)
        toggleModal()
    }

    return (
        <>
            <main className="mainPageContent">
                <section className='sectionHome'>
                    <p className='homeHeader'>Ciaran Grant</p>
                    <p className='homeSubheader'>Fullstack Web Developer</p>
                    <div className='homeLogos'>
                        <Link className='homeGithub' to={'https://github.com/CiaranRG?ocid=AIDcmm153qff2f_SEM__k_Cj0KCQjwk6SwBhDPARIsAJ59Gwcll4CWUlwSWoFr8lTOJ5-y5sVVzcp4928L7QKFYMgl_H4HE3lb-NYaAsKDEALw_wcB_k_'}><FontAwesomeIcon icon={faGithub} /></Link>
                        <Link className='homeGithub' to={'https://github.com/CiaranRG?ocid=AIDcmm153qff2f_SEM__k_Cj0KCQjwk6SwBhDPARIsAJ59Gwcll4CWUlwSWoFr8lTOJ5-y5sVVzcp4928L7QKFYMgl_H4HE3lb-NYaAsKDEALw_wcB_k_'}><FontAwesomeIcon icon={faGithub} /></Link>
                    </div>
                </section>
                <section className='sectionAbout'>
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
                        Moving forward, I aspire to develop top-level industry web applications, complete with all the "bells and whistles." I'm also keen on expanding my knowledge in web security and becoming versatile in various technologies to adapt to any situation. To stay at the cutting edge, I engage with tech communities on Reddit, YouTube, and Twitter.
                    </p>
                    <br />
                    <p>
                        My journey in web development has been a profound learning experience, and I take pride in every step. I'm excited about the future and the opportunities it holds.
                    </p>
                </section>
                <section className='sectionProjects'>
                    <ProjectPreview imgUrl={'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        title={'Star Wars Api App'} description={'An app used to search for info about any star wars character'}
                        onClick={() => handleProjectSelect({
                            title: 'Star Wars Api App',
                            description: 'An app used to search for info about any star wars character',
                            imgUrl: 'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            codeLink: 'https://github.com/CiaranRG/StaticSWAPISite',
                            icons: [faReact, faNodeJs, faGithub, faDatabase],
                        })}
                    />
                    <ProjectPreview imgUrl={'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        title={'Restaurant App'} description={'Mock restaurant website with account/reservation CRUD'}
                        onClick={() => handleProjectSelect({
                            title: 'Restaurant App',
                            description: 'Mock restaurant website with account/reservation CRUD',
                            imgUrl: 'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            codeLink: 'https://github.com/CiaranRG/RestaurantApp',
                            icons: [faReact, faNodeJs, faGithub, faDatabase],
                        })}
                    />
                    <ProjectPreview imgUrl={'../../public/WebsitePictures/ecommerceApp.jpg'}
                        title={'Ecommerce App'} description={'Meant to simulate a real world clothing shop website'}
                        onClick={() => handleProjectSelect({
                            title: 'Ecommerce App',
                            description: 'Meant to simulate a real world clothing shop website',
                            imgUrl: '../../public/WebsitePictures/ecommerceApp.jpg',
                            codeLink: 'https://github.com/CiaranRG/EcommerceApp',
                            icons: [faReact, faNodeJs, faGithub, faDatabase],
                        })}
                    />
                </section>
            </main>
            <Modal isOpen={isModalOpen} toggleModal={toggleModal}><ProjectDisplay projectInfo={currentProject} /></Modal>
        </>
    )
}