const INITIAL_STATE = {
    appName: 'SanZub'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGEAPPNAME':
            return({
                ...state,
                appName: action.data
            })
    }
    return state;
}