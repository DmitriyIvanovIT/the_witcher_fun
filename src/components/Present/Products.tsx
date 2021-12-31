import React from 'react';
import {
  CardProduct,
  PresentContent,
  Product,
  ProductButton,
  ProductBuy,
  ProductImg,
  ProductName,
  ProductPrice
} from './style';
import CartIcon from '%/img/icons/cart.svg';

const products = [
  {
    img: 'img/pendant.jpg',
    name: 'Медальон Школы Волка',
    price: '999₽'
  },
  {
    img: 'img/mask.jpg',
    name: 'Маска защитная',
    price: '390₽'
  },
  {
    img: 'img/pendent.jpg',
    name: 'Кулон Волк',
    price: '1999₽'
  }
];

const Products = (): JSX.Element => {
  return (
    <PresentContent>
      {products.map((item, index) => (
        <CardProduct key={index}>
          <Product>
            <ProductImg src={item.img} alt={item.name} />
            <ProductName>{item.name}</ProductName>
            <ProductBuy>
              <ProductPrice>{item.price}</ProductPrice>
              <ProductButton>
                <CartIcon />
              </ProductButton>
            </ProductBuy>
          </Product>
        </CardProduct>
      ))}
    </PresentContent>
  );
};

export default Products;
