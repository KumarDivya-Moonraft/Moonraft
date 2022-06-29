const initialState={
    itemCount:0,
    items:[],
}


function cartReducer(state=initialState,actions){
    const { type, payload }=actions;
    switch(type){
        case 'ADD_ITEM': return {
            ...state,
            items: [...state.items, payload ]
        }
        case 'DELETE_FROM_CART': return {
            ...state,
            item: []
        }
        default: return state
    }   
}

export default cartReducer;