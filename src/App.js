

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
              <img className="header__icon" src="./img/card.svg" alt="shopping card icon" width={20} height={20} />
              <span className="header__price">199 €</span>
            </li>
            <li className="header__right-item">
              <img className="header__icon" src="./img/user.svg" alt="user icon" width={20} height={20} />
            </li>
          </ul>

        </header>
      </div>

      <main>
        <section className="main">
          <div className="container">
            <h1 className="main__title">All sneakers</h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
