import './ProjectPreview.scss'

type ProjectPreviewProps = {
    imgUrl: string,
    title: string,
    description: string,
    onClick: () => void,
}

export default function ProjectPreview({ imgUrl, title, description, onClick}: ProjectPreviewProps) {
    return (
        <>
            <div className='previewDiv' onClick={onClick}>
                <div className='previewPicture' style={{ backgroundImage: `url(${imgUrl})`}}>
                    <div className='previewFade'>
                        <p className='previewTitle'>{title}</p>
                        <p>{description}</p>
                        <p>Click to View More!</p>
                    </div>
                </div>
            </div>
        </>
    )
}