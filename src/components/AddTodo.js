import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
  state = {
    title: ''
  }

onSubmit = (e) => {
  e.preventDefault()
  this.props.addTodo(this.state.title)
  this.setState({ title: '' })
}
                           
// we're not calling this function the dom is calling it, we're just passing it to react
// as an event listening. react is doing aev listener to add it as a callback to an event on an element.
// target, name and value are just properties of the vent object. Just have to know the DOM.
// the target is the element on which the event is fired.
// dynamically grabbing the name from the input box. can recycle this,
//when creating the input tag have to add a name attribute.

onChange = (e) => this.setState({ [e.target.name]: e.target.value.toUpperCase() })

  render() {
    return (
      <form onSubmit= {this.onSubmit } style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
// npm run build at the end.
// creates extra folder called build, static folder, js files 

