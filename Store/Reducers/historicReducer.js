const initialState = {
    historicFilms: []
}

function manageHistoricFilms(state = initialState, action) {
    let nextState
    let historicFilmIndex

    switch(action.type) {
        case 'TOGGLE_FILMDETAIL':
            historicFilmIndex = state.historicFilms.findIndex(item => item.id === action.value.id)
            if (historicFilmIndex === -1) {
                nextState = {
                    ...state,
                    historicFilms: [...state.historicFilms, action.value]
                }
                return nextState;
            }
            return state;

        case 'REMOVE_HISTORIC_FILM':
            historicFilmIndex = state.historicFilms.findIndex(item => item.id === action.value.id)
            if (historicFilmIndex !== -1) {
                nextState = {
                    ...state,
                    historicFilms: state.historicFilms.filter((item, index) => index !== historicFilmIndex)
                }
                return nextState;
            }
            return state;

        case 'RESET_HISTORIC':
            nextState = initialState
            return nextState;

        default:
            return state;
    }
}

export default manageHistoricFilms
