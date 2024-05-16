reference start blog: https://segmentfault.com/a/1190000042506966
Code Check:
- Eslint
- prettier
- husky
r



## structure
my-react-app/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── __tests__/
│   │   ├── App.test.jsx
│   │   ├── ProductListPage.test.jsx
│   │   ├── ProductCard.test.jsx
│   │   └── ...
│   ├── components/
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductCard.css
│   │   │   └── index.js
│   │   └── ...
│   ├── pages/
│   │   ├── ProductListPage/
│   │   │   ├── ProductListPage.jsx
│   │   │   ├── ProductListPage.css
│   │   │   └── index.js
│   │   └── ...
│   ├── utils/
│   │   ├── formatters.js
│   │   └── ...
│   ├── services/
│   │   ├── productService.js
│   │   └── ...
│   ├── App.tsx
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── ...

## How to start

```shell
pnpm install
pnpm install react-router-dom
```
test
```shell
pnpm install --save-dev jest @testing-library/react @testing-library/jest-dom
pnpm install --save-dev jest-mock-extended
```
route
```shell
pnpm install react-router-dom

```


