// src/components/ProductCard/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    return (
        <div data-testid="product-card">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
        </div>
    );
};

export default ProductCard;
