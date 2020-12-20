const changeName=(data)=>{
    return (dispatch) =>{
        dispatch({type: 'CHANGENAME', data: data})
    }
}

const changeEmail=(data)=>{
    return (dispatch) =>{
        dispatch({type: 'CHANGEMAIL', data: data})
    }
}

const changeAppName=(data)=>{
    return (dispatch) =>{
        dispatch({type: 'CHANGEAPPNAME', data: data})
    }
}

export {
    changeName,
    changeAppName,
    changeEmail
}