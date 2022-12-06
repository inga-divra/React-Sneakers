

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="overlay">
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
        <header className="header">

          <div className="header__left">
            <a className="logo header__logo" href="#" >
              <img className="logo__img" src="./img/logo.svg" alt="React Sneakers logo" width={40} height={40} />
            </a>
            <div className="header__info">
              <p className="header__title">React Sneakers</p>
              <p className="header__subtitle">The best sneakers on the market</p>
            </div>
          </div>
          <ul className="header__right">
            <li className="header__right-item">
              <img className="header__icon" src="./img/icons/card.svg" alt="shopping card icon" width={20} height={20} />
              <span className="header__price">189,90 €</span>
            </li>
            <li className="header__right-item">
              <img className="header__icon" src="./img/icons/user.svg" alt="user icon" width={20} height={20} />
            </li>
          </ul>
        </header>
        <main>
          <section className="main section">
            <div className="container">
              <div className="main__top">
                <h1 className="title main__title underline">All sneakers</h1>
                <div className="main__top-search">
                  <img className="main__top-search-icon" src="./img/icons/search.svg" alt="search product icon" />
                  <input className="main__top-search-input" type="search" placeholder="Search"></input>
                </div>
              </div>

              <div className="product__wrapper">
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
                <div className="product">
                  <img className="product__img" src="./img/sneakers/2.jpg" alt="green nike sneakers" width={133} height={112} />
                  <h2 className="product__title">Men's sneakers<span className="product__subtitle">Nike Air Max 270</span></h2>
                  <div className="product__details">
                    <div className="product__details-content">
                      <h3 className="product__details-title">Price:</h3>
                      <span className="price">160,00€</span>
                    </div>
                    <button className="product__btn" type="button">
                      <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="product__img" src="./img/sneakers/3.jpg" alt="green nike sneakers" width={133} height={112} />
                  <h2 className="product__title">Men's sneakers<span className="product__subtitle">Nike Blazer Mid Suede</span></h2>
                  <div className="product__details">
                    <div className="product__details-content">
                      <h3 className="product__details-title">Price:</h3>
                      <span className="price">109,99€</span>
                    </div>
                    <button className="product__btn" type="button">
                      <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="product__img" src="./img/sneakers/4.jpg" alt="green nike sneakers" width={133} height={112} />
                  <h2 className="product__title">Women's sneakers<span className="product__subtitle">Puma X Future Rider</span></h2>
                  <div className="product__details">
                    <div className="product__details-content">
                      <h3 className="product__details-title">Price:</h3>
                      <span className="price">64,95€</span>
                    </div>
                    <button className="product__btn" type="button">
                      <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="product__img" src="./img/sneakers/5.jpg" alt="green nike sneakers" width={133} height={112} />
                  <h2 className="product__title">Unisex<span className="product__subtitle">Under Armour Curry 8</span></h2>
                  <div className="product__details">
                    <div className="product__details-content">
                      <h3 className="product__details-title">Price:</h3>
                      <span className="price">128,00€</span>
                    </div>
                    <button className="product__btn" type="button">
                      <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="product__img" src="./img/sneakers/6.jpg" alt="green nike sneakers" width={133} height={112} />
                  <h2 className="product__title">Men's sneakers<span className="product__subtitle">Nike Kyrie 7</span></h2>
                  <div className="product__details">
                    <div className="product__details-content">
                      <h3 className="product__details-title">Price:</h3>
                      <span className="price">99,95€</span>
                    </div>
                    <button className="product__btn" type="button">
                      <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="product__img" src="./img/sneakers/7.jpg" alt="green nike sneakers" width={133} height={112} />
                  <h2 className="product__title">Men's sneakers<span className="product__subtitle">Jordan Air Jordan 11</span></h2>
                  <div className="product__details">
                    <div className="product__details-content">
                      <h3 className="product__details-title">Price:</h3>
                      <span className="price">125,00€</span>
                    </div>
                    <button className="product__btn" type="button">
                      <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="product__img" src="./img/sneakers/8.jpg" alt="green nike sneakers" width={133} height={112} />
                  <h2 className="product__title">Men's sneakers<span className="product__subtitle">Nike LeBron XVIII</span></h2>
                  <div className="product__details">
                    <div className="product__details-content">
                      <h3 className="product__details-title">Price:</h3>
                      <span className="price">139,00€</span>
                    </div>
                    <button className="product__btn" type="button">
                      <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="product__img" src="./img/sneakers/9.jpg" alt="green nike sneakers" width={133} height={112} />
                  <h2 className="product__title">Women's sneakers<span className="product__subtitle">Nike Lebron XVIII Low</span></h2>
                  <div className="product__details">
                    <div className="product__details-content">
                      <h3 className="product__details-title">Price:</h3>
                      <span className="price">115,00€</span>
                    </div>
                    <button className="product__btn" type="button">
                      <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                    </button>
                  </div>
                </div>
                <div className="product">
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
                <div className="product">
                  <img className="product__img" src="./img/sneakers/4.jpg" alt="green nike sneakers" width={133} height={112} />
                  <h2 className="product__title">Women's sneakers<span className="product__subtitle">Puma X Future Rider</span></h2>
                  <div className="product__details">
                    <div className="product__details-content">
                      <h3 className="product__details-title">Price:</h3>
                      <span className="price">64,95€</span>
                    </div>
                    <button className="product__btn" type="button">
                      <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="product__img" src="./img/sneakers/10.jpg" alt="green nike sneakers" width={133} height={112} />
                  <h2 className="product__title">Unisex<span className="product__subtitle">Nike Kyrie Flytrap IV</span></h2>
                  <div className="product__details">
                    <div className="product__details-content">
                      <h3 className="product__details-title">Price:</h3>
                      <span className="price">129,00€</span>
                    </div>
                    <button className="product__btn" type="button">
                      <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>


    </div>
  );
}

export default App;
