import React, {  useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import {addCard, deleteCard} from '../actions'
// import { getData } from '../actions'
//^do that import to display cards on load (use useEffect())

 
const CardsList = props => {
    // console.log(props.cards)
    const [searchTerm, setSearchTerm] = useState('')

// `````Redux hooks? `````````````
const [cards, error, isFetchingData] = useSelector((state) => [state.cards, state.error, state.isFetchingData])
const dispatch = useDispatch()    
// ``````````````````````````

// debugger
//   `````````Helpers```````
const filterCards = cards => {
    return cards.filter( card => {
        if(card.name.toLowerCase().includes(searchTerm.toLowerCase())){
           return card
        }
        if(!searchTerm){
            return card
        }
    })
}

    return (
        <div>
        { cards.length!==0 &&  //removed props.
         <input  
            placeholder='search through cards'
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
            />}

{cards.length!==0 &&  <button onClick={() => { dispatch(addCard(searchTerm)); setSearchTerm('') }}>+</button>}

        <div className='allCards'>

            {error ? <div className='error'> {error} </div> : filterCards(cards).map(card => {                 //removed props. from errorx2 and cards
                return (
                    <div className='card-card' key={card.id}>
                         <button onClick={() => dispatch(deleteCard(card))} className='deleteBtn'>x</button>
                        <h3>{card.name}</h3>
                        <p>{card.evolvesFrom && `Evolves from: ${card.evolvesFrom}`}</p>
                        <img src={`${card.imageUrl}`} />
                        
                        <div className='info'>
                        <p>{card.types && `Type: ${card.types}`}</p>
                        <div>{card.weaknesses?.map(weakness => {
                            // debugger
                            return (
                                <div key={weakness.type}>
                                    <p>Weak to: {weakness.type}</p>
                                </div>
                            )
                        })} </div>
                            </div>

                    </div>
                )
            })}
        </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     // debugger
//     return {
//         cards: state.cards,
//         error: state.error,
//         isFetchingData: state.isFetchingData
//     }
// }

// export default connect(
//     mapStateToProps,
//     {} //do {getData} to display cards on load
// )(CardsList)

export default CardsList








///////////////🍝SPAGHETTI CODE🍝////////////////////

    // useEffect(() => {
    //     props.getData()
    // }, [])

  //^ useEffect to display cards on load  