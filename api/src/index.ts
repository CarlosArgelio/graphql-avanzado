import { ApolloServer } from 'apollo-server'

// 1 - Query
const typeDefs = `
  type Query {
    info: String!
    avos: [Avo!]!
    avo(id: ID!): Avo
  }

  type Mutation {
    addAvo: addAvo!
  }

  type addAvo {
    dataAvo: Avo!
  }

  type Avo {
    id: ID!
    name: String!
    url: String!
    title: String!
    SKU: String!
    description: String!
    attributes: AvoAttribute!
    price: Float!
    image: String!
  }

  type AvoAttribute {
    Shape: String
    Hardiness: Int
    Taste: String
  }
`

// 2 - Resolvers
const resolvers = {
  Query: {
    info: () => 'This is the API of a Hackernews Clone',
    avos: () => {
      return [
        {
          url: 'XXXXXXXXXXXXXXXXXX',
          name: 'XXXXXXXXXXXXXXXXXX',
          title: 'XXXXXXXXXXXXXXXXXX',
          price: 123,
          image: 'XXXXXXXXXXXXXXXXXX',
          SKU: 'XXXXXXXXXXXXXXXXXX',
          description: 'XXXXXXXXXXXXXXXXXX',
          attributes: {
            Shape: 'XXXXXXXXXXXXXXXXXX',
            Hardiness: 123,
            Taste: 'XXXXXXXXXXXXXXXXXX',
          }
        },
        {
          url: 'XXXXXXXXXXXXXXXXXX',
          name: 'XXXXXXXXXXXXXXXXXX',
          title: 'XXXXXXXXXXXXXXXXXX',
          price: 123,
          image: 'XXXXXXXXXXXXXXXXXX',
          SKU: 'XXXXXXXXXXXXXXXXXX',
          description: 'XXXXXXXXXXXXXXXXXX',
          attributes: {
            Shape: 'XXXXXXXXXXXXXXXXXX',
            Hardiness: 123,
            Taste: 'XXXXXXXXXXXXXXXXXX',
          }
        },
        {
          url: 'XXXXXXXXXXXXXXXXXX',
          name: 'XXXXXXXXXXXXXXXXXX',
          title: 'XXXXXXXXXXXXXXXXXX',
          price: 123,
          image: 'XXXXXXXXXXXXXXXXXX',
          SKU: 'XXXXXXXXXXXXXXXXXX',
          description: 'XXXXXXXXXXXXXXXXXX',
          attributes: {
            Shape: 'XXXXXXXXXXXXXXXXXX',
            Hardiness: 123,
            Taste: 'XXXXXXXXXXXXXXXXXX',
          }
        },
      ]
    },
    avo: (_: any, { id }: any) => {
      console.log(id);

      return {
        url: 'XXXXXXXXXXXXXXXXXX',
        name: 'XXXXXXXXXXXXXXXXXX',
        title: 'XXXXXXXXXXXXXXXXXX',
        price: 123,
        image: 'XXXXXXXXXXXXXXXXXX',
        SKU: 'XXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXX',
        attributes: {
          Shape: 'XXXXXXXXXXXXXXXXXX',
          Hardiness: 123,
          Taste: 'XXXXXXXXXXXXXXXXXX',
        }
      }
    }
  },
  Mutation: {
    addAvo: (_: any, {name}: any) => {
      console.log(name);
    }
  }
}

// 3 - Init Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server running on ${url}`))
