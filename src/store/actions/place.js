import { ADD_PLACE, CLEAR_PLACES } from "./actionTypes";

export function addPlace(placeName){
    return {
        type: ADD_PLACE,
        payload: {
            name: placeName
        }
    }
}

export function clearPlaces(placeName){
    return {
        type: CLEAR_PLACES,
    }
}