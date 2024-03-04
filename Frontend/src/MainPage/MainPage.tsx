import './MainPage.scss'

export default function MainPage() {
    return (
        <>
            <main className="mainPageContent">
                <section className='sectionHome'>
                    <p className='homeHeader'>Ciaran Grant</p>
                    <p className='homeSubheader'>Fullstack Web Developer</p>
                    <p className='homeParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex recusandae nemo voluptas, repellat temporibus autem voluptates. Molestias magni, ducimus adipisci illum nobis necessitatibus, repellat atque possimus rem numquam quisquam.</p>
                </section>
                <section className='sectionAbout'>
                    <h1>About</h1>
                </section>
                <section className='sectionProjects'>
                    <h1>Projects</h1>
                </section>
                <section className='sectionContact'>
                    <h1>Contact</h1>
                </section>
            </main>
        </>
    )
}