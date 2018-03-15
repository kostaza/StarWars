import React from 'react'
import CharactersTable from './CharactersTable';
import { Modal } from 'react-bootstrap';

class Characters extends React.Component {
    render () {
        let { data, planets, planetsAction, characterAction, displayModal, closeModal, currentModal } = this.props;

        return (
            <div className="characters">
                <div className="page-title">
                    Star Wars Characters
                </div>
                <div className="table"><CharactersTable className="table" data={data} planets={planets} planetsAction={planetsAction}
                    characterAction={characterAction}/></div>
                {
                    displayModal &&
                        <Modal className="modal" show={displayModal} onHide={closeModal}>
                            <Modal.Header className="modal-header">
                                <Modal.Title className="modal-title">{currentModal.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modal-body">{this.renderModalBody(currentModal, planets)}</Modal.Body>
                            <Modal.Footer className="modal-footer">
                                <button className="close-modal" onClick={closeModal}>Close</button>
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
                <p><u>Additional Information:</u></p>
                <p>height:  <i>{character.height}</i></p>
                <p>mass:  <i>{character.mass}</i></p>
                <p>hair color:  <i>{character.hair_color}</i></p>
                <p>skin color:  <i>{character.skin_color}</i></p>
                <p>eye color:  <i>{character.eye_color}</i></p>
                <p>birth year:  <i>{character.birth_year}</i></p>
                <p>gender:  <i>{character.gender}</i></p>
            </Modal.Body>
        )
    }

}

class PlanetField extends React.Component {

    render () {
        let { name, planet } = this.props;
        return (
            <p>{name} comes from <i>{planet}</i></p>
        )
    }
}

class SpecieField extends React.Component {

    render () {
        let { name, specie } = this.props;
        return (
            <p>{name} is <i>{specie}</i></p>
        )
    }
}

export default Characters;