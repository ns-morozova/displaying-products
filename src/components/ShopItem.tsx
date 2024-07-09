import React from 'react';
import styles from './styles.module.css';

interface Product {
    name: string;
    price: string;
    color: string;
    img: string;
}

interface ShopItemProps {
    product: Product;
}

export const ShopItem: React.FC<ShopItemProps> = ({ product }) => {
    return (
        <div className={styles.shopItem}>
            <img src={product.img} alt={product.name} className={styles.itemImg} />
            <h2 className={styles.title}>{product.name}</h2>
            <p className={styles.color}>{product.color}</p>
            <p className={styles.price}>${product.price}</p>
            <button className={styles.buttonAdd}>add to cart</button>
        </div>
    );
};