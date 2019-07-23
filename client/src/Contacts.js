import React from 'react'
import { Query } from 'react-apollo'

import { GET_CONTACTS } from './queries'
import Contact from './Contact'

const Contacts = () => (
  <Query query={GET_CONTACTS}>
    {({ loading, error, data }) => {
      console.log('data', data)
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error: {error.message}</p>
      return (
        <ul>
          {data.contacts.map(({ id, firstName, lastName }) => (
            <Contact
              id={id}
              firstName={firstName}
              lastName={lastName}
            />
          ))}
        </ul>
      )
    }}
  </Query>
)

export default Contacts