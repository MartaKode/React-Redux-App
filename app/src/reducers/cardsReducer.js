import { FETCH_DATA, UPDATE_CARDS, SET_ERROR, ADD_CARD, DELETE_CARD } from '../actions'


export const initialState = {
    cards: [],
    isFetchingData: false,
    error: '',
}

export const cardsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                cards: [] //Clears displaying cards when we're fetching data
            }

        case UPDATE_CARDS:
            return {
                ...state,
                cards: action.payload,
                isFetchingData: false,
            }

        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                error: action.payload
            }

            case ADD_CARD:
                return{
                    ...state, 
                    cards:[{...state.cards,
                         name: action.payload !== ''
                          ? 
                          action.payload 
                          : 
                          'Nameless Card',
                           imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.YjVz-xaoALH63HmpHCEYrwHaEK&pid=Api&P=0&w=292&h=165', 
                           types: 'no additional info to display'},
                           ...state.cards]
                }

                case DELETE_CARD:
                    return{
                        ...state, cards: state.cards.filter(card => {
                            return card !== action.payload
                        })
                    }

        default:
            return state;
    }
}