import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faFont } from '@fortawesome/free-solid-svg-icons';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFont: 'Arial',
            isBold: false,
            isItalic: false,
            selectedFontSize: '12px',
            isUppercase: false,
            selectedColor: 'black' 
        };
    }

    handleFontChange = (event) => {
        const selectedFont = event.target.value;
        this.setState({ selectedFont });
        this.applyStyleToTextArea('font-family', selectedFont);
    };

    handleBoldText = () => {
        this.setState((prevState) => ({ isBold: !prevState.isBold }));
        this.applyStyleToTextArea('font-weight', this.state.isBold ? 'normal' : 'bold');
    };

    handleItalicText = () => {
        this.setState((prevState) => ({ isItalic: !prevState.isItalic }));
        this.applyStyleToTextArea('font-style', this.state.isItalic ? 'normal' : 'italic');
    };

    handleFontSizeChange = (event) => {
        const selectedFontSize = event.target.value;
        this.setState({ selectedFontSize });
        this.applyStyleToTextArea('font-size', selectedFontSize);
    };

    handleFontCase = () => {
        this.setState((prevState) => ({ isUppercase: !prevState.isUppercase }), () => {
            this.applyFontCase();
        });
    };

    handleColorChange = (event) => {
        const selectedColor = event.target.value;
        this.setState({ selectedColor });
        this.applyStyleToSelection('color', selectedColor);
    };

    applyStyleToTextArea = (style, value) => {
        const textArea = document.querySelector('.text-input');
        textArea.style[style] = value;
    };

    applyFontCase = () => {
        const textArea = document.querySelector('.text-input');
        const content = textArea.textContent;
        textArea.textContent = this.state.isUppercase ? content.toUpperCase() : content.toLowerCase();
    };

    applyStyleToSelection = (style, value) => {
        const selection = window.getSelection();
    
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.style[style] = value;
    
            // Clone the range to avoid modifying the original content
            const clonedRange = range.cloneRange();
            span.appendChild(clonedRange.extractContents());
            clonedRange.insertNode(span);
    
            selection.removeAllRanges();
        }
    };

    render() {
        const { selectedFont, isBold, isItalic, selectedFontSize, isUppercase, selectedColor } = this.state;

        return (
            <div className="options">
                <select className="options-select" onChange={this.handleFontChange}>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                </select>
                <button className={`options-button ${isBold ? 'active' : ''}`} onClick={this.handleBoldText}>
                    <FontAwesomeIcon icon={faBold} />
                </button>
                <button className={`options-button ${isItalic ? 'active' : ''}`} onClick={this.handleItalicText}>
                    <FontAwesomeIcon icon={faItalic} />
                </button>
                <select className="options-select" onChange={this.handleFontSizeChange}>
                    <option value="12px">12</option>
                    <option value="14px">14</option>
                    <option value="16px">16</option>
                    <option value="18px">18</option>
                    <option value="20px">20</option>
                    <option value="24px">24</option>
                </select>
                <button className={`options-button ${isUppercase ? 'active' : ''}`} onClick={this.handleFontCase}>
                    Aa
                </button>
                <input
                    type="color"
                    className="color-input rounded-color-input"
                    value={selectedColor}
                    onChange={this.handleColorChange}
                />

            </div>
        );
    }
}

export default Options;
