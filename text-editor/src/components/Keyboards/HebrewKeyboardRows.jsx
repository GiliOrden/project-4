import React, { Component } from 'react';
import KeyboardButton from './KeyboardButton';

class HebrewKeyboardRows extends Component {
    constructor (props) {
        super(props);
    }

    render() { 
    const keyButtons = [
        {id: 0, value1:"`", value2:"~"},
        {id: 1, value1:"1", value2:"!"},
        {id: 2, value1:"2", value2:"@"},
        {id: 3, value1:"3", value2:"#"},
        {id: 4, value1:"4", value2:"$"},
        {id: 5, value1:"5", value2:"%"},
        {id: 6, value1:"6", value2:"^"},
        {id: 7, value1:"7", value2:"&"},
        {id: 8, value1:"8", value2:"*"},
        {id: 9, value1:"9", value2:"("},
        {id: 10, value1:"0", value2:")"},
        {id: 11, value1:"-", value2:"_"},
        {id: 12, value1:"=", value2:"+"},
        {id: 13, value1: "delete", value2: "delete", bclass:"delete lastitem"},
        {id: 14, value1:"tab", value2:"tab", bclass:"tab"},
        {id: 15, value1: "/", value2: "Q"},
        {id: 16, value1: "'", value2: "W"},
        {id: 17, value1: "ק", value2: "E"},
        {id: 18, value1: "ר", value2: "R"},
        {id: 19, value1: "א", value2: "T"},
        {id: 20, value1: "ט", value2: "Y"},
        {id: 21, value1: "ו", value2: "U"},
        {id: 22, value1: "ן", value2: "I"},
        {id: 23, value1: "ם", value2: "O"},
        {id: 24, value1: "פ", value2: "P"},
        {id: 25, value1:"[", value2:"{"},
        {id: 26, value1:"]", value2:"}"},
        {id: 27, value1:"/", value2:"|", bclass: " lastitem"},
        {id: 28, value1:"caps lock", value2:"caps lock", bclass:"capslock"},
        {id: 29, value1: "ש", value2: "A"},
        {id: 30, value1: "ד", value2: "S"},
        {id: 31, value1: "ג", value2: "D"},
        {id: 32, value1: "כ", value2: "F"},
        {id: 33, value1: "ע", value2: "G"},
        {id: 34, value1: "י", value2: "H"},
        {id: 35, value1: "ח", value2: "J"},
        {id: 36, value1: "ל", value2: "K"},
        {id: 37, value1: "ך", value2: "L"},
        {id: 38, value1:"ף", value2:":"},
        {id: 39, value1:"'", value2:"\""},
        {id: 40, value1:"enter", value2:"enter", bclass:"return last item"},
        {id: 41, value1:"shift", value2:"shift", bclass:"left-shift"},
        {id: 42, value1: "ז", value2: "Z"},
        {id: 43, value1: "ס", value2: "X"},
        {id: 44, value1: "ב", value2: "C"},
        {id: 45, value1: "ה", value2: "V"},
        {id: 46, value1: "נ", value2: "B"},
        {id: 47, value1: "מ", value2: "N"},
        {id: 48, value1: "צ", value2: "M"},
        {id: 49, value1:"ת", value2:"<"},
        {id: 50, value1:"ץ", value2:">"},
        {id: 51, value1:".", value2:"?"},
        {id: 52, value1:"shift", value2:"shift", bclass:"right-shift lastitem"}   


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
 
export default HebrewKeyboardRows;