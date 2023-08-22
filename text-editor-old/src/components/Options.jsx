import React, { Component } from 'react';

import TextFormatOptions from './Options/TextFormatOptions';
import ListOptions from './Options/ListOptions';
import UnRedoOptions from './Options/UnRedoOptions';
import AlignmentOptions from './Options/AlignmentOptions';
import IndentOptions from './Options/IndentOptions';
import AdvancedOptionButton from './Options/AdvancedOptionButton';



class Options extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div className="options">
                <TextFormatOptions />
                <ListOptions />
                <UnRedoOptions />
                <AlignmentOptions />
                <IndentOptions />
                <AdvancedOptionButton id="fontName" />
                <AdvancedOptionButton id="fontSize" />
                <AdvancedOptionButton id="color" />
            </div>          
        );
    }
}

export default Options;