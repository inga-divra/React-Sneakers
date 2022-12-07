function Product() {
    return (
        <div className="product">
            <div className="product__favorite">
                <img className="product__favorite-img" src="./img/icons/heart_like.svg" alt="add product to card icon" width={32} height={32} />
            </div>
            <img className="product__img" src="./img/sneakers/1.jpg" alt="green nike sneakers" width={133} height={112} />
            <h2 className="product__title">Men's sneakers<span className="product__subtitle">Nike Blazer Mid Suede</span></h2>
            <div className="product__details">
                <div className="product__details-content">
                    <h3 className="product__details-title">Price:</h3>
                    <span className="price">110,00€</span>
                </div>
                <button className="product__btn" type="button">
                    <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                </button>
            </div>
        </div>
    );
}

export default Product;