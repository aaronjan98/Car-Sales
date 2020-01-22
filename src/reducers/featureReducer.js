const initialState = {
    data: []
}

export const featureReducer = (state = initialState, action) => {
    console.log('state:', state, 'action:', action);

    switch(action.type) {
        default:
            return state;
    }
}