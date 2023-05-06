import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';

class EnglishKeyboardRows extends Component {
    constructor(props) {
        super(props);
    }
    

    render() { 
        const keyButtons = [
            {id: 1, value1:"`", value2:"~"},
            {id: 2, value1:"1", value2:"!"},
            {id: 3, value1:"2", value2:"@"},
            {id: 4, value1:"3", value2:"#"},
            {id: 5, value1:"4", value2:"$"},
            {id: 6, value1:"5", value2:"%"},
            {id: 7, value1:"6", value2:"^"},
            {id: 8, value1:"7", value2:"&"},
            {id: 9, value1:"8", value2:"*"},
            {id: 10, value1:"9", value2:"("},
            {id: 11, value1:"0", value2:")"},
            {id: 12, value1:"-", value2:"_"},
            {id: 13, value1:"=", value2:"+"},
            {id: 14, value1: "delete", value2: "delete", bclass:"delete lastitem"},
            {id: 15 , value1:"tab", value2:"tab", bclass:"tab"},
            {id: 16, value1: "q", value2: "Q"},
            {id: 17, value1: "w", value2: "W"},
            {id: 18, value1: "e", value2: "E"},
            {id: 19, value1: "r", value2: "R"},
            {id: 20, value1: "t", value2: "T"},
            {id: 21, value1: "y", value2: "Y"},
            {id: 22, value1: "u", value2: "U"},
            {id: 23, value1: "i", value2: "I"},
            {id: 24, value1: "o", value2: "O"},
            {id: 25, value1: "p", value2: "P"},
            {id: 26, value1:"[", value2:"{"},
            {id: 27, value1:"]", value2:"}"},
            {id: 28, value1:"/", value2:"|", bclass: " lastitem"},
            {id: 29, value1:"caps lock", value2:"caps lock", bclass:"capslock"},
            {id: 30, value1: "a", value2: "A"},
            {id: 31, value1: "s", value2: "S"},
            {id: 32, value1: "d", value2: "D"},
            {id: 33, value1: "f", value2: "F"},
            {id: 34, value1: "g", value2: "G"},
            {id: 35, value1: "h", value2: "H"},
            {id: 36, value1: "j", value2: "J"},
            {id: 37, value1: "k", value2: "K"},
            {id: 38, value1: "l", value2: "L"},
            {id: 39, value1:";", value2:":"},
            {id: 40, value1:"'", value2:"\""},
            {id: 41, value1:"enter", value2:"enter", bclass:"return last item"},
            {id: 42, value1:"shift", value2:"shift", bclass:"left-shift"},
            {id: 43, value1: "z", value2: "Z"},
            {id: 44, value1: "x", value2: "X"},
            {id: 45, value1: "c", value2: "C"},
            {id: 46, value1: "v", value2: "V"},
            {id: 47, value1: "b", value2: "B"},
            {id: 48, value1: "n", value2: "N"},
            {id: 49, value1: "m", value2: "M"},
            {id: 50, value1:",", value2:"<"},
            {id: 51, value1:".", value2:">"},
            {id: 52, value1:"/", value2:"?"},
            {id: 53, value1:"shift", value2:"shift", bclass:"right-shift lastitem"}
            
        ]

        return keyButtons.map(btn =>  
            (<KeyboardButton 
                key={btn.id} 
                value1={btn.value1} 
                value2={btn.value2} 
                bclass={btn.bclass}
                isShift={this.props.isShift}
                onClick={this.props.onClick} />));
    }
}
 
export default EnglishKeyboardRows;