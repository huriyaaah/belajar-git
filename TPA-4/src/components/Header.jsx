import { Link } from 'react-router-dom'
import '../css/style.css'

const Header = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h4>Huriyah Afiyah</h4>
                </div>

                <ul>
                    <li><Link to={'/'}> Home </Link></li>
                    <li><Link to={'/about'}> About </Link></li>
                    <li><Link to={'/skill'}> Skills </Link></li>
                    <li><Link to={'/article'}> Article </Link></li>
                </ul>

                <div className="tombol-nav">
                    <input type="checkbox" name="" id=""/>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    )
}

export default Header