import { gql } from 'apollo-boost'

export const GET_CONTACTS = gql`
  {
    contacts {
      id
      firstName
      lastName
    }
  }
`

export const ADD_CONTACT = gql`
  mutation AddContact($id: String!, $firstName: String!, $lastName: String!) {
    addContact(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`