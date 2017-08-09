import React from 'react';
import Row from './row';
import Cell from './cell';
import Footer from './footer';

export default class Game extends React.Component {

    state = {
        gameState: 'ready'
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ gameState: 'memorize' });
            setTimeout(() => this.setState({ gameState: 'recall' }), 4000);
        }, 2000);
    }

    render() {
        let matrix = [];
        for (let i=0;i<this.props.rows;i++) {
            let row = [];
            for (let j=0;j<this.props.columns;j++) {
                row.push(`${i}-${j}`);
            }
            matrix.push(row);
        }
        return(
            <div>
                <div className='grid'>
                    {matrix.map((row,index) => 
                        <Row key={index}>
                            { row.map( id => <Cell key={id}>{id}</Cell> ) }
                        </Row>
                    )}
                </div>
            <Footer {...this.state}/>
            </div>
        )
    }
}
