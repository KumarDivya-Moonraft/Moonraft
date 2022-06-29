import { ADD_PLACE, CLEAR_PLACES } from "./actionTypes";

export function addItem(itemDetails){
    return {
        type: ADD_PLACE,
        payload: {
            name: itemDetails
        }
    }
}