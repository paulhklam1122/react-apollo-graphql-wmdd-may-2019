import { gql } from 'apollo-server'
import { find } from 'lodash'

const contacts = [
  {
    id: '1',
    firstName: 'Paul',
    lastName: 'Lam'
  },
  {
    id: '2',
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    id: '3',
    firstName: 'Jane',
    lastName: 'Smith'
  }
]

const typeDefs = gql`
  type Contact {
    id: String!
    firstName: String
    lastName: String
  }

  type Query {
    contacts: [Contact]
  }

  type Mutation {
    addContact(id: String!, firstName: String!, lastName: String!): Contact
    updateContact(id: String!, firstName: String!, lastName: String!): Contact
  }
`

const resolvers = {
  Query: {
    contacts: () => contacts
  },
  Mutation: {
    addContact: (root, args) => {
      const newContact = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName
      }
      contacts.push(newContact)
      return newContact
    },
    updateContact: (root, args) => {
      const contact = find(contacts, { id: args.id })
      if (!contact) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }

      contact.firstName = args.firstName
      contact.lastName = args.lastName
      return contact
    }
  }
}

export { typeDefs, resolvers }