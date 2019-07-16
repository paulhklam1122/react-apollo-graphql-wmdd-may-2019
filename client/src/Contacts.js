import React from 'react'
import { Query } from 'react-apollo'

import { GET_CONTACTS } from './queries'

const Contacts = () => (
  <Query query={GET_CONTACTS}>
    {({ loading, error, data }) => {
      console.log('data', data)
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error: {error.message}</p>
      return (
        <ul>
          {data.contacts.map(({ id, firstName, lastName }) => (
            <li key={id}>{firstName} {lastName}</li>
          ))}
        </ul>
      )
    }}
  </Query>
)

export default Contacts