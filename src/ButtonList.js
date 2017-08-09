import React, { Component } from 'react';

class ButtonList extends Component {
    render() {
        var buttons = this.props.buttons;
        return (
            <div>
            {
                buttons.map((item) => {
                    return <button onClick={() => this.props.handleClick(item.id)}>{item.label}</button>
                })
            }
            </div>
        );
    }
}

export default ButtonList;