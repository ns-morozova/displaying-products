import React from 'react';
import { ShopItem } from './ShopItem';
import styles from './styles.module.css';

interface Product {
    name: string;
    price: string;
    color: string;
    img: string;
}

interface ListViewProps {
    items: Product[];
}

export const ListView: React.FC<ListViewProps> = ({ items }) => {
    return (
        <div className={styles.listView}>
            {items.map((product, index) => (
                <ShopItem key={index} product={product} />
            ))}
        </div>
    );
};
