import './ProjectPreview.scss'

type ProjectPreviewProps = {
    imgUrl: string,
    title: string,
    description: string,
    onClick: () => void,
}

export default function ProjectPreview({imgUrl, title, description, onClick}: ProjectPreviewProps) {
    console.log(imgUrl)
    return (
        <>
            <div className='previewDiv' onClick={onClick}>
                <div className="topDiv">
                    <p>Picture</p>
                </div>
                <div className="bottomDiv">
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>Icons</p>
                    {/* <button>View More</button> */}
                </div>
            </div>
        </>
    )
}