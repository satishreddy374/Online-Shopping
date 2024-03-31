import {Link} from "react-router-dom";
import "./index.css";

const Header = () => {

    return (
        <>
            <div className="headers-page-container">
                <Link to="/"><img className="logo" src="https://i.ibb.co/3NxDs7F/e.jpg" alt="logo-image" /></Link>
                
                <div className="paths-container">
                    <Link to="/" className="path">Home</Link>
                    <Link to="/products" className="path">Products</Link>
                </div>
            </div>
            
        </>
    )
}

export default Header


