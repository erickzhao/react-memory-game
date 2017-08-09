import React from 'react';
import Hint from './hint';

class Footer extends React.Component {
    render() {
        return(
            <div>
                <Hint>
                    {this.props.hints[this.props.gameState]}
                </Hint>
            </div>
        )
    }
}

Footer.defaultProps = {
    hints: {
        ready: 'Get Ready',
        memorize: 'Memorize',
        recall: 'Recall'
    }
}

export default Footer;