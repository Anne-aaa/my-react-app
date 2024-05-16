// src/components/ProductCard/__tests__/ProductCard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard/ProductCard.jsx';
import '@testing-library/jest-dom'

describe('ProductCard', () => {
    const product = {
        id: 1,
        name: 'Test Product',
        price: 9.99,
        imageUrl: 'https://via.placeholder.com/150',
    };

    test('renders product name', () => {
        render(<ProductCard product={product} />);
        const nameElement = screen.getByText(/Test Product/i);
        expect(nameElement).toBeInTheDocument();
    });

    test('renders product price', () => {
        render(<ProductCard product={product} />);
        const priceElement = screen.getByText(/\$9.99/);
        expect(priceElement).toBeInTheDocument();
    });

    test('renders product image', () => {
        render(<ProductCard product={product} />);
        const imageElement = screen.getByRole('img');
        expect(imageElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
    });
});
