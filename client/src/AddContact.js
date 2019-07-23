import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import uuidv4 from 'uuid/v4'

import { ADD_CONTACT, GET_CONTACTS } from './queries'

class AddContact extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  render() {
    const { firstName, lastName } = this.state
    const id = uuidv4()
    return (
      <Mutation
        mutation={ADD_CONTACT}
        update={(store, { data: { addContact } }) => {
          const { contacts } = store.readQuery({ query: GET_CONTACTS })
          store.writeQuery({
            query: GET_CONTACTS,
            data: { contacts: contacts.concat([addContact])}
          })
        }}
      >
        {(addContact, { data, loading, error }) => (
          <form onSubmit={e => {
            e.preventDefault()
            addContact({
              variables: {
                id,
                firstName,
                lastName
              },
              optimisticResponse: {
                __typename: 'Mutation',
                addContact: {
                  __typename: 'Contact',
                  id,
                  firstName,
                  lastName
                }
              }
            })
          }}>
            <input
              value={firstName}
              placeholder='John'
              onChange={e => this.setState({ firstName: e.target.value})}
            />
            <input
              value={lastName}
              placeholder='Doe'
              onChange={e => this.setState({ lastName: e.target.value})}
            />
            <button type='submit'>Add Contact</button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default AddContact