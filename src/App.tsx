import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>Shopping Center</h1>
      <div className="card">
          <Link to="/products">
              <button>
                  click to see the products
              </button>
          </Link>
        <p>
            Shopping Center brings together millions of products, covering various categories, including electronic products, household items, clothing accessories
            Decorations, fresh food, etc. .
        </p>
      </div>
    </>
  )
}

export default App
