import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import './ProductListPage.css';

const products = [
    { id: 1, name: 'Product 1', price: 9.99, imageUrl: 'https://via.placeholder.com/150', stock: 10 },
    { id: 2, name: 'Product 2', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 5 },
    { id: 3, name: 'Product 3', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 20 },
    { id: 4, name: 'Product 4', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 15 },
    { id: 5, name: 'Produc、t 5', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 8 },
    { id: 6, name: 'Product 6', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 12 },
    { id: 7, name: 'Product 7', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 7 },
    { id: 8, name: 'Product 8', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 3 },
    { id: 9, name: 'Product 9', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 18 },
    { id: 10, name: 'Product 10', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 22 },
    { id: 11, name: 'Product 11', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 9 },
    { id: 12, name: 'Product 12', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 6 },
    { id: 13, name: 'Product 13', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 14 },
    { id: 14, name: 'Product 14', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 11 },
    { id: 15, name: 'Product 15', price: 14.99, imageUrl: 'https://via.placeholder.com/150', stock: 4 },
];

const ProductListPage = () => {
    //变量currentPage初始值为1  函数setCurrentPage用于更新currentPage
    const [currentPage, setCurrentPage] = useState(1);
    //每页展示的产品数量
    const itemsPerPage = 5;
    //向上取整 页数
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    //切片
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        // 会更新currentPage,当 currentPage 状态更新后，React 会重新渲染组件，使用新的 currentPage 值计算出新的 startIndex、endIndex 和 currentProducts。
        setCurrentPage(pageNumber);
    };

    return (
        <div className="product-list-page">
            <h1 className="product-list-heading">Product List</h1>
            <div className="product-list-container">
                {currentProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        data-testid="product-card"
                    />
                ))}
            </div>
            {/*分页按钮*/}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        // 这样就可以通过 CSS 来设置 active 类名的样式,从而突出显示当前页码的按钮。
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductListPage;
