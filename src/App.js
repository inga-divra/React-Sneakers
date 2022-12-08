import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product/Product.js";

const products = [
  {
    name: "Men's sneakers Nike Blazer Mid Suede",
    price: 110.00,
    imgUrl: "./img/sneakers/1.jpg"
  },
  {
    name: "Men's sneakers Nike Air Max 270",
    price: 160.00,
    imgUrl: "./img/sneakers/2.jpg"
  },
  {
    name: "Men's sneakers Nike Blazer Mid White",
    price: 109.99,
    imgUrl: "./img/sneakers/3.jpg"
  },
  {
    name: "Women's sneakers Puma X Future Rider",
    price: 64.95,
    imgUrl: "./img/sneakers/4.jpg"
  },
  {
    name: "Unisex Under Armour Curry 8",
    price: 128.00,
    imgUrl: "./img/sneakers/5.jpg"
  },
  {
    name: "Men's sneakers Nike Kyrie 7",
    price: 99.95,
    imgUrl: "./img/sneakers/6.jpg"
  },
  {
    name: "Men's sneakers Jordan Air Jordan 11",
    price: 125.00,
    imgUrl: "./img/sneakers/7.jpg"
  },
  {
    name: "Men's sneakers Nike LeBron XVIII",
    price: 139.00,
    imgUrl: "./img/sneakers/8.jpg"
  },
  {
    name: "Women's sneakers Nike Lebron XVIII Low",
    price: 115.00,
    imgUrl: "./img/sneakers/9.jpg"
  },
  {
    name: "Men's sneakers Nike Blazer Mid Green",
    price: 119.00,
    imgUrl: "./img/sneakers/1.jpg"
  },
  {
    name: "Women's sneakers Puma X Future Rider",
    price: 60.95,
    imgUrl: "./img/sneakers/4.jpg"
  },
  {
    name: "Unisex Nike Kyrie Flytrap IV",
    price: 129.00,
    imgUrl: "./img/sneakers/10.jpg"
  }
]

const arr = [1, 2, 3, 4, 5];


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

                {products.map((product) => {
                  return <Product
                    title={product.name}
                    price={product.price}
                    imgUrl={product.imgUrl}

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
