function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <a className="logo header__logo" href="#" >
                    <img className="logo__img" src="./img/icons/free1.svg" alt="React Sneakers logo" width={60} height={60} />
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
    );
}

export default Header;