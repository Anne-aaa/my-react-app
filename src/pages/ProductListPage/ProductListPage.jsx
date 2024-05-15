import React from 'react';

// 模拟商品数据
const products = [
  { id: 1, name: '商品1', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: '商品2', price: 24.99, image: 'https://via.placeholder.com/150' },
  // ... 其他13个商品数据
];

const ProductList = () => {
  return (
    <div>
      <h1>商品列表</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>价格: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
