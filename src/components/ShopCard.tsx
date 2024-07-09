import React from 'react';
import styles from './styles.module.css';

interface Product {
    name: string;
    price: string;
    color: string;
    img: string;
}

interface ShopCardProps {
    product: Product;
}

export const ShopCard: React.FC<ShopCardProps> = ({ product }) => {
    return (
        <div className={styles.shopCard} style={{ backgroundImage: `url(${product.img})` }}>
            <div className={styles.contHead}>
                <h2 className={styles.title}>{product.name}</h2>
                <p className={styles.color}>{product.color}</p>
            </div>
            <div className={styles.contFoot}>
                <p className={styles.price}>${product.price}</p>
                <button className={styles.buttonAdd}>add to card</button>
            </div>
        </div>
    );
};