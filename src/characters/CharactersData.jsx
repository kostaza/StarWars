import React from 'react'

class CharactersData extends React.Component {

    render () {
        let { data, planets, characterAction } = this.props;

        return (
            <tbody>
                {data.map(character =>
                    <tr key={character.name.toString()}>
                        <td><a href="#" onClick={() => characterAction(character)}>{character.name}</a></td>
                        <td>{planets[character.homeworld] ? planets[character.homeworld].name : ""}</td>
                    </tr>
                    )
                }
            </tbody>
        )
    }
}

export default CharactersData;