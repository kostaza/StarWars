import React from 'react'

class PlanetsData extends React.Component {

    render () {
        let { planet } = this.props;
        return (
            planet !== undefined && planet.name !== 'unknown' &&
            <tr>
                <td>{planet.name}</td>
                <td>{planet.terrain}</td>
                <td>{planet.population}</td>
            </tr>
        )
    }
}

export default PlanetsData;
