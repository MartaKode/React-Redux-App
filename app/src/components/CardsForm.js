import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'

import {getData} from '../actions'

const CardsForm = props => {
// Redux Hooks``````````
const [isFetchingData] = useSelector((state) => [state.isFetchingData])
const dispatch = useDispatch()
// ``````````````````

    return (
        <div>
            {isFetchingData ? //deleted props.
            <div>* *. . . Fetching cards . . . * *</div>
            : 
            <button
            onClick={() => dispatch(getData())} //deleted props. and wrapped in dispatch
            >Get Cards</button>}
        </div>
    )
}

// const mapStateToProps = state => {

//     return{
//         isFetchingData: state.isFetchingData
//     }
// }

// export default connect(
//     mapStateToProps,
//      { getData }
//      )(CardsForm)

export default CardsForm
