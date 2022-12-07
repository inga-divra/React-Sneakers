function Hero() {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__content">
                    <div className="hero__content-left">
                        <img className="hero__icon" src="./img/icons/adidas_icon.jpg" alt="adidas & disnay icons" />
                        <div className="hero__content-text">
                            <h1 className="hero__title">Stan Smith<span className="hero__title-comma">,</span> <span className="hero__subtitle">Forever!</span></h1>
                            <button className="btn hero__btn">New collection</button>
                        </div>

                    </div>
                    <div className="hero__content-right">
                        <img className="hero__content-img" src="./img/banner.jpg" alt="stan smith sneakers" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;