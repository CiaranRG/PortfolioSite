import { Link } from 'react-router-dom';
import './ProjectDisplay.scss'
  

export default function ProjectDisplay({projectInfo}){
    // Creating a function to stop the modal from toggling when clicking the modal component
    const handleModalClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        // Prevents the click event from bubbling up to the modal overlay
        evt.stopPropagation();
    };
    return (
        <div className='projectDisplayDiv' onClick={handleModalClick}>
            <h1>{projectInfo.title}</h1>
            <p>{projectInfo.description}</p>
            <p>Techonolgies</p>
            <Link to={`${projectInfo.codeLink}`}>Code Link</Link>
            <p>Image of website</p>
        </div>
    )
}