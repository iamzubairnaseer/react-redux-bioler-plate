const INITIAL_STATE = {
    username: 'iamzubairnaseer',
    email: 'zubairnaseer88@gmail.com'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGENAME':
            return({
                ...state,
                username: action.data
            })
        case 'CHANGEMAIL':
            return({
                ...state,
                email: action.data
            })
    }
    return state;
}