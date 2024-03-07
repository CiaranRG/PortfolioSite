import './MainPage.scss'

export default function MainPage() {
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
                    <p>
                        Hello! I'm a web developer with a passion for technology, driven by an early fascination with computers and video games. My journey into programming began with the desire to create games, leading me down the path to discovering the world of web development.
                    </p>
                    <br />
                    <p>
                        My adventure started with Harvard's CS50 course, where I gained a foundational understanding of computer science principles. Eager to dive deeper into web development, I then completed a comprehensive Udemy course, equipping me with the skills needed to tackle full-stack projects. My approach to learning has always been hands-on, crafting projects that emulate real-world websites. This practical experience has given me a solid grasp of managing user accounts and rendering data from PostgreSQL databases, preparing me for the kind of work I aspire to do.
                    </p>
                    <br />
                    <p>
                        While I have a particular affinity for front-end development—where I can exercise my creativity in designing user-centric experiences—I've also found the complexities of back-end development intriguing. Striking the perfect balance between functionality and aesthetics is what I strive for in every project.
                    </p>
                    <br />
                    <p>
                        Looking ahead, my goal is to create industry-leading web applications that incorporate the latest technologies and design trends. I'm also keen on broadening my expertise in web security, ensuring that the applications I build are not only innovative but also safe for users. As the tech landscape evolves, I stay informed through communities on Reddit, YouTube, and Twitter, always ready to adapt and embrace new challenges.
                    </p>
                    <br />
                    <p>
                        My journey in web development has been incredibly rewarding. Every project, every line of code, has been a stepping stone towards becoming the developer I aim to be. I'm proud of how far I've come and excited for what the future holds.
                    </p>
                </section>
                <section className='sectionProjects'>
                    <h1>Projects</h1>
                    <br />
                    <div>SWAPI Project - MUI/React </div>
                    <div>Restaurant - Node/React/TS/SCSS/PSQL </div>
                    <div>Ecommerce - Node/React/TS/SCSS/PSQL </div>
                </section>
                {/* <section className='sectionContact'>
                    <h1>Contact</h1>
                </section> */}
            </main>
        </>
    )
}