import {Link} from "react-router-dom";

function Header() {
    return (
        <>

            <Link to='/' className='link'>HOME</Link>
            <Link to='/create' className='link'>CREATE</Link>
        </>
    )
}
export default Header