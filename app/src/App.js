import React from 'react';
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'

// import { cardsReducer as reducer } from './reducers/cardsReducer'

import CardsForm from './components/CardsForm'
import CardsList from './components/CardsList'

import './App.css';


// const store = createStore(reducer, applyMiddleware(thunk))

function App() {

  return (
    // <Provider store={store}>
      <div className="App">
        <h1>POKEMON!</h1>
        <CardsForm />
        <CardsList />
      </div>
    // </Provider>
  );
}

export default App;
