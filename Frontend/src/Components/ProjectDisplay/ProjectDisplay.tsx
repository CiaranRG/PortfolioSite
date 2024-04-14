import { Link } from 'react-router-dom';
import './ProjectDisplay.scss'

// Importing this to define types for our icons
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type projectInfoProps = {
    projectInfo: {
        title: string,
        description: {
            intro: string,
            middle: string,
            tech: string,
        },
        codeLink: string,
        imgUrl: string,
        icons?: IconDefinition[],
    }
}

export default function ProjectDisplay({ projectInfo }: projectInfoProps) {
    // Creating a function to stop the modal from toggling when clicking the modal component
    const handleModalClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        // Prevents the click event from bubbling up to the modal overlay
        evt.stopPropagation();
    };
    return (
        <div className='projectDisplayDiv' onClick={handleModalClick}>
            <h1>{projectInfo.title}</h1>
            <div className='projectDescription'>
                <p>{projectInfo.description.intro}</p>
                <p>{projectInfo.description.middle}</p>
                <p>{projectInfo.description.tech}</p>
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illo dolores eum impedit quo eligendi unde officiis facere, ipsum eveniet alias nobis animi quas deleniti incidunt odit id corrupti. Quidem?</p> */}
            <div className='projectIcons'>
                {projectInfo.icons?.map((icon, index) => (
                <div key={index}>
                    <FontAwesomeIcon icon={icon} />
                </div>
                ))}
            </div>
            <Link to={`${projectInfo.codeLink}`}>Visit Repository</Link>
            <Link to={`${projectInfo.codeLink}`}>Visit Website</Link>
        </div>
    )
}