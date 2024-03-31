import {Link} from "react-router-dom"
import "./index.css";

const ProductItem = (props) => {
    const {productDetails} = props 
    const {id, image, title, price, rating} = productDetails
    const {rate, count} = rating
    
    
    return (
        
        <Link to={`/products/${id}`} className="product-list-item-container">
            <>
                <img className="product-image" src={image} alt={title} />
                <h2 className="title">{title}</h2>
            
                <div className="price-rating-container">
                    <h3 className="price-text">Price: <span className="price">{price}$</span></h3>
                    <h4 className="rating-text">Rating: <span className="rating">{rate}</span></h4>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
            </>
        </Link>
    )
}


export default ProductItem



