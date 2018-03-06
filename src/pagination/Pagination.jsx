import React from 'react'

class Pagination extends React.Component {

    render () {
        let { next, previous, clickAction } = this.props;

        return (
            <div>
                <button className="page-prev" onClick={() => clickAction(previous)} disabled={previous === null}>Previous</button>
                <button className="page-next" onClick={() => clickAction(next)} disabled={next === null}>Next</button>
            </div>
        )
    }
}

export default Pagination;