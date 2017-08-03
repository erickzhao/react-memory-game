import React from 'react';
import Game from './game';

export default class Container extends React.Component {
    render() {
        return(
            <div>
               <Game rows={5} columns={5}/>
            </div>
        )
    }
}