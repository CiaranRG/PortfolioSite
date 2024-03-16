import './MainPage.scss'
import ProjectPreview from '../Components/ProjectPreview/ProjectPreview'
import Modal from '../Components/Modal/Modal'
import ProjectDisplay from '../Components/ProjectDisplay/ProjectDisplay'
import { useState } from 'react'

export default function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState(true)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
            <main className="mainPageContent">
                <section className='sectionHome'>
                    <p className='homeHeader'>Ciaran Grant</p>
                    <p className='homeSubheader'>Fullstack Web Developer</p>
                    <p className='homeParagraph'>CHANGE THIS TO LINKS TO GITHUB/LINKEDIN/EMAIL ETC</p>
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
                    <ProjectPreview imgUrl={'temp'} title={'SWAPI APP'} description={'An app used to search for info about any star wars character'} />
                    <ProjectPreview imgUrl={'temp'} title={'Restaurant App'} description={'Mock restaurant website with account/reservation CRUD'} />
                    <ProjectPreview imgUrl={'temp'} title={'Ecommerce App'} description={'Meant to simulate a real world clothing shop website'} />
                    {/* <div>SWAPI Project - MUI/React </div>
                    <div>Restaurant - Node/React/TS/SCSS/PSQL </div>
                    <div>Ecommerce - Node/React/TS/SCSS/PSQL </div> */}
                </section>
                {/* <section className='sectionContact'>
                    <h1>Contact</h1>
                </section> */}
            </main>
            <Modal isOpen={isModalOpen} toggleModal={toggleModal}><ProjectDisplay/></Modal>
        </>
    )
}