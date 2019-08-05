import React, { Component } from 'react'

class Todolist extends Component {

    componentDidUpdate() {
        if(this.props.inputElement) {
            this.props.inputElement.current.focus()
        }
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                  <form onSubmit={this.props.addItem }>
                    <input 
                    placeholder="Task" 
                    ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handleInput}
                    />
                    <button type="submit"> Add Task </button>
                  </form>
               </div>
            </div>
        );
    }
}

export default Todolist