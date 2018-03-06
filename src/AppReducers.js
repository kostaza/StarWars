
const currentScreen = (state = {
    'planetsView': false,
    'displayModal': false,
    'currentModal': null,
    'characters': [],
    'next': null,
    'previous': null,
    'current': 'https://swapi.co/api/people/?format=json&page=1',
    'planetsDetails': {}
}, action) => {

    switch (action.type) {
        case 'DATA_FETCH_SUCCESS': {
            return {
                ...state,
                characters: action.data.response.data.results,
                next: action.data.response.data.next,
                previous: action.data.response.data.previous,
                current: action.data.address
            };
        }
        case 'PLANET_FETCH_SUCCESS': {
            return {
                ...state,
                planetsDetails: {...action.planets}
            };
        }
        case 'TOGGLE_DISPLAY_PLANETS': {
            return {
                ...state,
                planetsView: !state.planetsView
            }
        }
        case 'DISPLAY_CHARACTER_MODAL': {
            return {
                ...state,
                displayModal: true,
                currentModal: action.character
            }
        }
        case 'CLOSE_CHARACTER_MODAL': {
            return {
                ...state,
                displayModal: false
            }
        }

        default:
            return state;
    }
};

export default currentScreen;
