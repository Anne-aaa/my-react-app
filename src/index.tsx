import React from 'react'
import App from './App.tsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListPage from './pages/ProductListPage/ProductListPage.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/products" element={<ProductListPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
