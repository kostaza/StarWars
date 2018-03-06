import axios from 'axios';

function fetchData(address) {
    return axios.get(address);
}

const AppActionHelper = {

    fetchPage(dispatch, address, planets) {
      return fetchData(address).then(response => {
          dispatch({
              type: 'DATA_FETCH_SUCCESS',
              data: { response, address}
          });
          response.data.results.forEach(character => {
              if (!(planets.hasOwnProperty(character.homeworld.toString()))){
                  fetchData(character.homeworld).then(res => {
                      planets[character.homeworld] = {
                          name: res.data.name,
                          terrain: res.data.terrain,
                          population: res.data.population
                      };
                      dispatch({
                          type: 'PLANET_FETCH_SUCCESS',
                          planets
                      })
                  })
              }
          });
      })
    },

    togglePlanets(dispatch) {
        dispatch({
           type: 'TOGGLE_DISPLAY_PLANETS'
        });
    },

    displayCharacter(dispatch, character) {
        return fetchData(character.species).then(response => {
            dispatch({
                type: 'DISPLAY_CHARACTER_MODAL',
                character: {
                    ...character,
                    species: response.data.name
                }
            });
        })
    },

    closeModal(dispatch) {
        dispatch({
            type: 'CLOSE_CHARACTER_MODAL',
        });
    }
};

export default AppActionHelper;