import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export class Store {
  static configureStore () {
    let initialState

    if (arguments.length > 0) {
      initialState = Object.assign({}, ...arguments)
    }

    if (process.env.NODE_ENV === 'development') {
      return createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
    }

    return createStore(rootReducer, initialState, applyMiddleware(thunk))
  }
}

export default Store
