import { gql } from 'apollo-server'

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
    }
  }
}

export { typeDefs, resolvers }