import {combineReducers, createStore} from 'redux'
import ThemeReducer from './ThemeReducer'

const allReducers = combineReducers({
  theme: ThemeReducer
})

const saveToLocalStorage = state => {
  try {
    const serialedState = JSON.stringify(state)
    localStorage.setItem('state', serialedState)
  } catch(e) {
    console.log(e)
  }
}

const loadFromLocalStorage = state => {
  try {
    const serialedState = localStorage.getItem('state')
    return serialedState === null ? undefined : JSON.parse(serialedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store

