import React from 'react';
import { ShopCard } from './ShopCard';
import styles from './styles.module.css';

interface Product {
    name: string;
    price: string;
    color: string;
    img: string;
}

interface CardsViewProps {
    cards: Product[];
}

export const CardsView: React.FC<CardsViewProps> = ({ cards }) => {
    return (
        <div className={styles.cardsView}>
            {cards.map((product, index) => (
                <ShopCard key={index} product={product} />
            ))}
        </div>
    );
};