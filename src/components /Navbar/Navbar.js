import navbar from './Navbar.css';
import { Link } from "react-router-dom";
function Navbar(){
    return (
        <>
            <nav >
                <Link to = "/city/:id" className='nav'> More </Link>
                <Link to ="/" className='nav'> Home </Link>
                
            </nav>
        </>
    )
}
export default Navbar;