import React from 'react';
import PlanetsTable from './PlanetsTable'


class Planets extends React.Component {
    render () {
        let { characters, planets, backAction } = this.props;

        return (
            <div>
                <div className="page-title">Star Wars Planets</div>
                <button className="back-button" onClick={backAction}>Back to characters</button>
                <div className="table"><PlanetsTable className="table" characters={characters} planets={planets}/></div>
            </div>
        );
    }

}

export default Planets;