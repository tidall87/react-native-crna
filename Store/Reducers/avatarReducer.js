const initialAvatarState = {avatar: {uri: '../../Images/ic_tag_faces.png'}}

function manageAvatar(state = initialAvatarState, action) {
    let nextState
    switch (action.type) {
        case 'SET_AVATAR':
            nextState = {
                ...state,
                avatar: action.value
            }
            return nextState || state
        default:
            return state
    }
}

export default manageAvatar
