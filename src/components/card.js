import React, { Component } from 'react';

import input from './input';

class card extends Component {
    render() {
        return (
            <div className="card">
                { input('Color')}
                { input('Plural Noun')}
                { input('Adjective')}
            </div>
        )
    }
}

export default card;