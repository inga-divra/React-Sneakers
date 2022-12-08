import style from './Product.module.scss';
import { useState } from 'react';

function Product(props) {
    const [isAdded, setIsAdded] = useState(false);

    const onAddHandler = () => {
        setIsAdded(!isAdded)

    }


    return (
        <div className={style.product}>
            <button className={style.product__favorite}
                type="button"
                onClick={props.onFavorite}>
                <img className="product__favorite-img" src="./img/icons/heart_like.svg" alt="add product to card icon" width={32} height={32} />
            </button>

            <img className="product__img" src={props.imgUrl} alt="green nike sneakers" width={133} height={112} />
            <h2 className={style.product__title}>{props.title}</h2>
            <div className={style.product__details}>
                <div className="product__details-content">
                    <h3 className="product__details-title">Price:</h3>
                    <span className="price">{props.price}€</span>
                </div>
                <button className="product__btn"
                    type="button"
                    onClick={onAddHandler}>
                    <img className="product__btn-img" src={isAdded ? './img/icons/checked_btn.svg' : './img/icons/add_btn.svg'} alt="add to card button" width={32} height={32} />
                </button>
            </div>
        </div >
    );
}

export default Product;