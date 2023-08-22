import React, { Component } from 'react';

import Options from './Options'
import TextInput from './TextInput';
import Keyboards from './Keyboards';

class Main extends Component {

    render() { 
        return (
            <div className="container">
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
                <div className="title">Text Editor</div>
                <div className="subcontainer">
                    <Options />
                    <TextInput />
                </div>
                <Keyboards />
            </div>
        );
    }
}
 
export default Main;