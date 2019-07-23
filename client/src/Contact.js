import React, { Component } from 'react'
import UpdateContact from './UpdateContact'

class Contact extends Component {
  state = {
    editMode: false,
    firstName: this.props.firstName || '',
    lastName: this.props.lastName || ''
  }

  handleEditButtonClick = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleCancelButtonClick = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    const { id, firstName, lastName } = this.props
    const { editMode } = this.state
    return (
      <div>
        {
          editMode ?
            <UpdateContact
              editMode={editMode}
              id={id}
              firstName={firstName}
              lastName={lastName}
              onInputChange={this.handleInputChange}
              onCancelButtonClick={this.handleCancelButtonClick}
            />
            :
            <li key={id}>
              {firstName} {lastName}
              <button onClick={this.handleEditButtonClick}>Edit</button>
              <button>Delete</button>
            </li>
        }
      </div>
    )
  }
}

export default Contact