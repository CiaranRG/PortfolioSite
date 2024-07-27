import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer(){

    return(
        <div className="footerDiv">
            <div className='backToTopDiv'><Link to={'/'}>Back to top</Link></div>
            {/* <div>
                <p>Social Links</p>
            </div> */}
        </div>
    )
}