import {Route, Switch} from 'react-router-dom'

import Cart from './components/Cart'
import Home from './components/Home'
import Products from './components/Products'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products" component={Products} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
