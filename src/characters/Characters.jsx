import React from 'react'
import CharactersTable from './CharactersTable';
import { Modal } from 'react-bootstrap';

class Characters extends React.Component {
    render () {
        let { data, planets, planetsAction, characterAction, displayModal, closeModal, currentModal } = this.props;

        return (
            <div>
                <div className="page-title">
                    Star Wars Characters
                </div>
                <div className="table"><CharactersTable className="table" data={data} planets={planets} planetsAction={planetsAction}
                    characterAction={characterAction}/></div>
                {
                    displayModal &&
                        <Modal show={displayModal} onHide={closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>{currentModal.name}</Modal.Title>
                            </Modal.Header>
                            {this.renderModalBody(currentModal, planets)}
                            <Modal.Footer>
                                <button onClick={closeModal}>Close</button>
                            </Modal.Footer>
                        </Modal>
                }
            </div>
        );
    }

    renderModalBody (character, planets) {

        return (
            <Modal.Body>
                <PlanetField name={character.name} planet={planets[character.homeworld].name}/>
                <SpecieField name={character.name} specie={character.species}/><br/>
                <p>Additional Information:</p>
                <p>height: {character.height}</p>
                <p>mass: {character.mass}</p>
                <p>hair color: {character.hair_color}</p>
                <p>skin color: {character.skin_color}</p>
                <p>eye color: {character.eye_color}</p>
                <p>birth year: {character.birth_year}</p>
                <p>gender: {character.gender}</p>
            </Modal.Body>
        )
    }

}

class PlanetField extends React.Component {

    render () {
        let { name, planet } = this.props;
        return (
            <p>{name} comes from {planet}</p>
        )
    }
}

class SpecieField extends React.Component {

    render () {
        let { name, specie } = this.props;
        return (
            <p>{name} is {specie}</p>
        )
    }
}

export default Characters;