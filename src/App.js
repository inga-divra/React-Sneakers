import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Drawer />
        <Header />
        <main>
          <Hero />
          <section className="main section">
            <div className="container">
              <div className="main__top">
                <h2 className="title main__title underline">All sneakers</h2>
                <div className="main__top-search">
                  <img className="main__top-search-icon" src="./img/icons/search.svg" alt="search product icon" />
                  <input className="main__top-search-input" type="search" placeholder="Search"></input>
                </div>
              </div>
              <div className="product__wrapper">
                <Product />
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
