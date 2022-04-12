import { ContainerHeader, Nav } from './Header-style';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <ContainerHeader>
            <div className="title">
                <Link to="/"><h1>BestStreming</h1></Link>
            </div>
            <div className='nav-bar'>
                <Nav>
                    <Link to="/allmovies"><li>All movies</li></Link>
                    <Link to="/"><li>Contact</li></Link>
                    <Link to="/"><li>favoris</li></Link>
                </Nav>
            </div>
        </ContainerHeader>
    )
}

export default Header
