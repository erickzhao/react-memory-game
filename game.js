import React from 'react';
import Row from './row';
import Cell from './cell';

export default class Game extends React.Component {
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
            <div className='grid'>
                {matrix.map((row,index) => 
                    <Row key={index}>
                        { row.map( id => <Cell key={id}>{id}</Cell> ) }
                    </Row>
                )}
            </div>
        )
    }
}
