function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <div className="drawer__top">
                    <h2 className="title drawer__title underline drawer__underline">
                        My cart</h2>
                    <button className="drawer__close-btn">
                        <img className="drawer__close-btn_icon" src="./img/icons/delete_btn.svg" alt="close cart icon" width={32} height={32} />
                    </button>
                </div>
                <div className="drawer__cards">
                    <div className="drawer__card">
                        <img className="drawer__card-img" src="./img/sneakers/2.jpg" alt="Nike Air Max 270" width={70} height={70} />
                        <div className="drawer__card-desc">
                            <h3 className="drawer__card-title">Men's sneakers <span className="drawer__card-subtitle">Nike Air Max 270</span></h3>
                            <span className="price">109,99€</span>
                        </div>
                        <button className="drawer__card-btn" type="button">
                            <img className="drawer__card-btn-icon" src="./img/icons/delete_btn.svg" alt="delete product from the cart icon" width={32} height={32} />
                        </button>
                    </div>
                    <div className="drawer__card">
                        <img className="drawer__card-img" src="./img/sneakers/4.jpg" alt="Nike Air Max 270" width={70} height={70} />
                        <div className="drawer__card-desc">
                            <h3 className="drawer__card-title">Women's sneakers <span className="drawer__card-subtitle">Puma X Future Rider</span></h3>
                            <span className="price">64,95€</span>
                        </div>
                        <button className="drawer__card-btn" type="button">
                            <img className="drawer__card-btn-icon" src="./img/icons/delete_btn.svg" alt="delete product from the cart icon" width={32} height={32} />
                        </button>
                    </div>
                </div>
                <div className="drawer__bottom">
                    <ul className="drawer__bottom-items">
                        <li className="drawer__bottom-item">
                            <p className="drawer__bottom-desc">Total:</p>
                            <span className="drawer__bottom-line"></span>
                            <span className="drawer__bottom-price price">192.43€</span>
                        </li>
                        <li className="drawer__bottom-item">
                            <p className="drawer__bottom-desc">Alv 10%:</p>
                            <span className="drawer__bottom-line"></span>
                            <span className="drawer__bottom-price price">17.49€</span>
                        </li>
                    </ul>
                    <button className="btn drawer__btn" type="button">
                        Proceed to checkout
                        <img className="drawer__btn-icon" src="./img/icons/arrow_right.svg" alt="arrow right" width={14} height={12} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;