import axios from 'axios'
import { bindActionCreators } from 'redux'

export const FETCH_DATA = 'FETCH_DATA'
export const UPDATE_CARDS = 'UPDATE_CARDS'
export const SET_ERROR = 'SET_ERROR'

export const ADD_CARD = 'ADD_CARD'
export const DELETE_CARD = 'DELETE_CARD'

export const getData = () => dispatch => {
    //thunk(middleware) relies on us to make the dispatch call ourselves
    dispatch({ type: FETCH_DATA })

    axios.get('https://api.pokemontcg.io/v1/cards')
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATE_CARDS, payload: res.data.cards })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: SET_ERROR, payload: 'Error fetching data from the api' })
        })

}

export const addCard = (newCardName) => {
return {type: ADD_CARD, payload: newCardName}
}

export const deleteCard = toRemoveCard => {
    return {type: DELETE_CARD, payload: toRemoveCard}
}