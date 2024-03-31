import {Link} from "react-router-dom"
import "./index.css"
import Header from "../Header";

const Home = () => {

    return (
        <div className="profile-page-container">
            <Header />

            <div className="home-page-container">
                <div className="home-page-details-container">
                    <h3 className="welcome-text">Welcome to</h3>
                    <h1 className="online-shopping-text">ONLINE SHOPPING</h1>
                    <p className="home-page-text">The best platform for online shopping where customers can find different categories of products...</p>
                    <Link to="/products">
                        <button className="shop-now-button">Shop Now</button>
                    </Link>

                </div>
                <div className="home-page-image-container">
                    <img className="profile-page-image" alt="home-page-image" src="https://i.ibb.co/C1TD2B9/picture-1.png" />
                </div>   
            </div> 
        </div>
    )

}

export default Home





