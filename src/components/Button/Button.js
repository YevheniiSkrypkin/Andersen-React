import React from "react";
import './Button.module.css'

class Button extends React.Component {
    render() {
        return(
            <button type={this.props.type}>{this.props.text}</button>
        )
    }
}

export default Button;