import {useEffect, useState} from "react"
import "./index.css"
import Header from "../Header"

import CategoryTabItem from "../CategoryTabItem"
import ProductsPage from "../ProductsPage"

const categoryTabsList = [
    {id: 1, category: "men's clothing", categoryText: "Men's clothing"},{id: 2, category: "electronics", categoryText: "Electronics"}, {id: 3, category: "jewelery", categoryText: "Jewelery"}, 
    {id: 4, category: "women's clothing", categoryText: "Women's clothing"}
]


const Products = () => {
    
    const [data, setData] = useState([])
    const [activeCategory, setActiveCategory] = useState(categoryTabsList[0].category);
    const [searchInput, setSearchInput] = useState("")
    
    
    useEffect(() => {

        try {
            fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData))
        }

        catch(error) {
            console.log(error)
        }

    }, [])

    const onChangeSearchInput = (event) => {
        setSearchInput(event.target.value)
    }

    const onChangeCategoryTab = (category) => {
        setActiveCategory(category)
    }

    let filteredProducts = []

    
    if (data.length > 0) {
        filteredProducts = data.filter((item) => {
            return item.category === activeCategory
        })
    }

    const searchedResults = filteredProducts.filter((productItem) => {
        return productItem.title.toLowerCase().includes(searchInput.toLowerCase())
    })
    
   

    return (
        <div className="products-page-container">
            <Header />
            <div className="products-section-container">
                <h1 className="products-page-heading">Welcome to Products Page!!!</h1>
                <ul className="category-tabs-list-container">
                    {categoryTabsList.map((tab) => (
                        <CategoryTabItem isActive={activeCategory===tab.category} onChangeCategoryTab={onChangeCategoryTab} key={tab.id} categoryDetails={tab} />
                    ))}
                </ul>

                <div className="product-details-container">
                    
                    <div className="input-details-container">
                        <input value={searchInput} onChange={onChangeSearchInput} className="search-input-element" type="search" placeholder="Search Products..." />
                    </div>
                    {searchedResults.length > 0 && 
                    <ProductsPage searchedResults={searchedResults} />
                    }
                </div>
                
            </div>
        </div>
    )
}




export default Products