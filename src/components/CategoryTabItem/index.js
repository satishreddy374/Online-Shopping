import "./index.css"

const CategoryTabItem = (props) => {
    const {categoryDetails, onChangeCategoryTab, isActive} = props
    const {category, categoryText} = categoryDetails
    const onClickCategoryTab = () => {
        onChangeCategoryTab(category)
    }
    return (
        <li className="category-list-item">
            <button type="button" onClick={onClickCategoryTab} className={`category-tab-button ${isActive ? "active-category-tab" : "normal-category-tab"}`}>{categoryText}</button>
        </li>
    )
}


export default CategoryTabItem


