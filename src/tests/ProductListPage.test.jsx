import React from 'react';
import {render, screen} from '@testing-library/react';
import ProductListPage from '../pages/ProductListPage/ProductListPage.jsx';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

jest.mock('../components/ProductCard/ProductCard', () => {
    return (() => <div data-testid="product-card">mockModuleName</div>);
});

describe('ProductListPage', () => {
    test('renders product list heading', () => {
        render(<ProductListPage />);
        const headingElement = screen.getByText(/Product List/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders correct number of product cards',  () => {
        render(<ProductListPage />);
        expect((screen.getAllByTestId('product-card')).length).toBe(5)// 默认每页显示 5 个产品
    });

    test('renders pagination buttons', () => {
        render(<ProductListPage />);
        const paginationButtons = screen.getAllByRole('button');
        expect(paginationButtons.length).toBe(3); // 总共 15 个产品,分为 3 页
    });

    test('changes page when pagination button is clicked', async () => {
        render(<ProductListPage />);
        // 返回一个包含各种用户事件处理程序的对象
        const user = userEvent.setup();

        const secondPageButton = screen.getByRole('button', { name: '2' });
        await user.click(secondPageButton);

        const productCards = screen.getAllByTestId('product-card');
        expect(productCards.length).toBe(5); // 第二页也应该显示 5 个产品
    });
});

