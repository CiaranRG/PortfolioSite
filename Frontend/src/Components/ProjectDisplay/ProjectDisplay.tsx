import './ProjectDisplay.scss'

export default function ProjectDisplay(){
    // Creating a function to stop the modal from toggling when clicking the modal component
    const handleModalClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        // Prevents the click event from bubbling up to the modal overlay
        evt.stopPropagation();
    };

    return (
        <div className='projectDisplayDiv' onClick={handleModalClick}>
            <h1>Project Name</h1>
            <p>Description</p>
            <p>Techonolgies</p>
            <p>Links to code</p>
            <p>Image of website</p>
        </div>
    )
}