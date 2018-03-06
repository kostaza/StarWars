import React from 'react';
import PlanetsData from './PlanetsData'

class PlanetsTable extends React.Component {

    render () {
        let { characters, planets } = this.props;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Terrain</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.reduce((init, character) => {
                            return init.includes(character.homeworld) ? init : init.concat([character.homeworld])
                        }, []).map(world => { return <PlanetsData key={world} planet={planets[world]}/> })
                    }
                </tbody>
            </table>
        )

    }
}


export default PlanetsTable;
