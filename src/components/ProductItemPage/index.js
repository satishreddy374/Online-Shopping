import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import "./index.css"
import Header from "../Header"

const ProductItemPage = () => {

    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {

        try {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(jsonData => setData(jsonData))
        }

        catch(error) {
            console.log(error)
        }

    }, [])
    
    
    return (
        <div className="product-details-page">
            <Header />
            
            {data && 
            <div className="product-details-page-container">
                <div className="product-details-page-card-container">
                    <div className="product-image-and-details-container">
                        <img className="pro-image" src={data.image} alt={data.title} />
                        <div className="pro-page-details-container">
                            <h2 className="product-title">{data.title}</h2>
                            <h4 className="product-category">Category: <span className="category-special-text">{data.category}</span></h4>
                            <h5 className="product-price">Price: <span className="price-special-text">{data.price}</span> $</h5>
                            <h5 className="product-rating">Rating: <span className="rating-special-text">{data.rating.rate}</span></h5>
                            <h5 className="product-rating-count">Rating Count: <span className="rating-count-special-text">{data.rating.count}</span></h5>
                        </div>
                    </div>
                    
                    <hr className="hori-line" />

                    <div className="description-container">
                        <h2 className="description-heading">Description</h2>
                        <p className="description-text">{data.description}</p>
                    </div>
                </div>
            </div>
            }
        </div>
        
    )
}

export default ProductItemPage


