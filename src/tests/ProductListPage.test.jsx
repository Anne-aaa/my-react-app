import React from 'react';
import {render, screen} from '@testing-library/react';
import ProductListPage from '../pages/ProductListPage/ProductListPage.jsx';
import '@testing-library/jest-dom'

jest.mock('../components/ProductCard/ProductCard', () => {
    return (() => <div>mockModuleName</div>);
});
describe('ProductListPage', () => {
    test('renders product list heading', () => {
        render(<ProductListPage />);
        const headingElement = screen.getByRole('heading', { level: 1 });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent(/Product List/i);
    });

    test('renders at least 15 product cards', async () => {
        render(<ProductListPage />);
        const productCards = await screen.findAllByText('mockModuleName');
        expect(productCards.length).toBeGreaterThanOrEqual(15);
    });
});
