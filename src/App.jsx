import React from 'react'
import { connect } from 'react-redux'
import AppActionHelper from './AppActionHelper'
import Characters from './characters/Characters'
import Planets from './planets/Planets'
import Pagination from './pagination/Pagination'

class App extends React.Component {

    componentWillMount () {
        this.props.fetchPage(this.props.current, this.props.planetsDetails)
    }


    render () {
        return (
                <div>
                    {
                        this.props.planetsView &&
                        <Planets characters={this.props.characters} planets={this.props.planetsDetails} backAction={this.props.togglePlanets}/>
                    }
                    {
                        !this.props.planetsView &&
                        <Characters data={this.props.characters} planets={this.props.planetsDetails} planetsAction={this.props.togglePlanets}
                        characterAction={character => this.props.displayCharacter(character)} displayModal={this.props.displayModal}
                        closeModal={this.props.closeModal} currentModal={this.props.currentModal}/>
                    }
                    <Pagination next={this.props.next} previous={this.props.previous}
                                clickAction={address => this.props.fetchPage(address, this.props.planetsDetails)}/>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        planetsView: state.root.planetsView,
        displayModal: state.root.displayModal,
        currentModal: state.root.currentModal,
        characters: state.root.characters,
        next: state.root.next,
        previous: state.root.previous,
        current: state.root.current,
        planetsDetails: state.root.planetsDetails
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        fetchPage: (address, planets) => AppActionHelper.fetchPage(dispatch, address, planets),
        togglePlanets: () => AppActionHelper.togglePlanets(dispatch),
        displayCharacter: (character) => AppActionHelper.displayCharacter(dispatch, character),
        closeModal: () => AppActionHelper.closeModal(dispatch)
    };
};

export default connect(mapStateToProps, mapActionsToProps)(App);