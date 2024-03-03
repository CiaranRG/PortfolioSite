import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer(){

    return(
        <div className="footerDiv">
            <div className='backToTopDiv'><Link to={'/'}>Back To Top</Link></div>
            <div>
                <p>Social Links</p>
            </div>
        </div>
    )
}