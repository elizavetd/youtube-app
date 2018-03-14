import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import './index.css'
import App from './containers/App/App'
import registerServiceWorker from './registerServiceWorker'
import Store from './store'

ReactDOM.render(
  <Provider store={Store.configureStore()}>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
