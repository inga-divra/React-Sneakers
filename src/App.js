import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product/Product.js";
import { useEffect, useState } from "react";
const url = 'https://6392d87311ed187986a2605e.mockapi.io/products';




function App() {
  const [products, setProducts] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([1, 2]);


  const fetchProducts = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      return setProducts(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <div className="App">
      <div className="wrapper">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
        <Header onClickCart={() => setCartOpened(true)} />
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

                {products.map((product) => {
                  return <Product
                    title={product.name}
                    price={product.price}
                    imgUrl={product.imgUrl}
                    onFavorite={() => console.log('My fav')}
                    onAdd={() => console.log('I want that product')}
                  />
                })}

              </div>
            </div>
          </section>
        </main>
      </div>


    </div>
  );
}

export default App;
