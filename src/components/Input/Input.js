import React from "react";
import './Input.module.css'

class Input extends React.Component {
    render () {
        return (
            <label>
                {this.props.title}
                <br></br>
                <input 
                    onKeyPress={(event) => {
                        if(this.props.type === 'tel') {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                alert('Можно вводить только цифры')
                            }
                        }
                    }}
                       
                    type={this.props.type} 
                    placeholder={'Введите '+this.props.title.toLowerCase()}>
                </input>
            </label>
        )
    }
}

export default Input;