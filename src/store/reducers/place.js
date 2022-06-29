import { ADD_PLACE, CLEAR_PLACES } from "../actions/actionTypes";

const initialState={
    places:['Pune'],
    something: 'ABC',
}

function placeReducer(state=initialState, actions) {
    const { type, payload }=actions;
    switch(type){
        case ADD_PLACE: return {
            ...state,
            places: [...state.places, payload.name ]
        }
        case CLEAR_PLACES: return {
            ...state,
            places:[]
        }
        default: return state
    }
}

export default placeReducer;