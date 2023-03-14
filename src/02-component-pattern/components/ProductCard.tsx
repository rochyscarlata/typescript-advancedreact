import { createContext, ReactElement, useState } from 'react';
import { useProducts } from './../hooks/useProducts';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
}

interface Product {
    id: string;
    title: string;
    img?: string;
}


const ProductContext = createContext({});
const { Provider } = ProductContext;


export const ProductImage = ({ img = '' }) => {
    return (
        <img className={styles.productImg} src={img ? img : noImage} alt='product' />

    )
}

export const ProductTitle = ({ title }: { title: string }) => {
    return (
        <span className={styles.productDescription}> {title}</span>
    )

}

interface PoductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number;

}
export const ProductButtons = ({ increaseBy, counter }: PoductButtonsProps) => {
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>+</button>
        </div >
    )
}

export const ProductCard = ({ children, product }: Props) => {

    const { counter, increaseBy } = useProducts();

    return (
        <Provider value={{
            counter, increaseBy, product
        }}>
            <div className={styles.productCard}>
                {children}
                {/* <PorductImage img={product.img} />

            <ProductTitle title={product.title} />

            <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
            </div>

        </Provider>
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
