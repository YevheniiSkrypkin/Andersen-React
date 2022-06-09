import React from "react";
import './Textarea.module.css'

class Textarea extends React.Component {
    render () {
        return (
            <label>{this.props.label}<br></br><textarea rows={this.props.rows} placeholder={'Введите '+this.props.label.toLowerCase()} /></label>
        )
    }
}

export default Textarea;