import React, { useState } from 'react';
import { IconSwitch } from './IconSwitch';
import { CardsView } from './CardsView';
import { ListView } from './ListView';
import styles from './styles.module.css';

interface Product {
    name: string;
    price: string;
    color: string;
    img: string;
}

const products: Product[] = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

export const Store: React.FC = () => {
    const [view, setView] = useState<'module' | 'list'>('module');

    const handleSwitch = () => {
        setView(view === 'module' ? 'list' : 'module');
    };

    return (
        <div className={styles.store}>
            <IconSwitch
                icon={view === 'module' ? 'view_list' : 'view_module'}
                onSwitch={handleSwitch}
            />
            {view === 'module' ? (
                <CardsView cards={products} />
            ) : (
                <ListView items={products} />
            )}
        </div>
    );
};