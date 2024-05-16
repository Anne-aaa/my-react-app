import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';

const products = [
    { id: 1, name: 'Product 1', price: 9.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 8', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Product 9', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Product 10', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Product 11', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Product 12', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Product 13', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Product 14', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Product 15', price: 14.99, imageUrl: 'https://via.placeholder.com/150' },
];

const ProductListPage = () => {
    return (
        <div>
            <h1>Product List</h1>
            <div>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} data-testid="product-card" />
                ))}
            </div>
        </div>
    );
};

export default ProductListPage;