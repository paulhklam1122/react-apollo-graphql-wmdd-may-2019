import React from 'react'
import { Mutation } from 'react-apollo'

import { UPDATE_CONTACT } from './queries'

const UpdateContact = (props) => {
  const { id, firstName, lastName, onInputChange, onCancelButtonClick } = props
  console.log(firstName, lastName)
  return (
    <Mutation
      mutation={UPDATE_CONTACT}
      key={id}
    >
      {(updateContact, { loading, error }) => (
        <form onSubmit={e => {
          e.preventDefault()
          updateContact({ variables: { id, firstName, lastName }})
        }}>
          <input
            name='firstName'
            defaultValue={firstName}
            placeholder='John'
            onChange={e => onInputChange(e.target.name, e.target.value)}
          />
          <input
            name='lastName'
            defaultValue={lastName}
            placeholder='Smith'
            onChange={e => onInputChange(e.target.name, e.target.value)}
          />
          <button type='submit'>Update Contact</button>
          <button onClick={onCancelButtonClick}>Cancel</button>
        </form>
      )}
    </Mutation>
  )
}

export default UpdateContact