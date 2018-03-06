import React from 'react';
import CharactersData from './CharactersData'

class CharactersTable extends React.Component {

    render () {
        let { data, planets, planetsAction, characterAction } = this.props;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>
                            <a href="#" onClick={planetsAction}>Home Planet</a>
                        </th>
                    </tr>
                </thead>
                <CharactersData data={data} planets={planets} characterAction={characterAction}/>
            </table>
        )

    }
}

export default CharactersTable;