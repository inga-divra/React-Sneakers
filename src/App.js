

function App() {
  return (
    <div className="App">
      <div className="wrapper">
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
              <h1 className="title">All sneakers</h1>
              <div className="product">
                <img className="product__img" src="./img/sneakers/1.jpg" alt="green nike sneakers" width={133} height={112} />
                <h2 className="product__title">Men's sneakers <span className="product__subtitle">Nike Blazer Mid Suede</span></h2>
                <div className="product__details">
                  <div className="product__details-content">
                    <h3 className="product__details-title">Price:</h3>
                    <span className="product__details-price">110,00€</span>
                  </div>
                  <button className="product__btn" type="button">
                    <img className="product__btn-img" src="./img/icons/add_btn.svg" alt="add to card button" width={32} height={32} />
                  </button>
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
