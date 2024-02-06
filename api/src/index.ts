import { ApolloServer } from 'apollo-server'
import { readFileSync } from 'fs'
import { join } from 'path'

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

const typeDefs = readFileSync(join(__dirname, './schema.graphql'), 'utf-8')

// 3 - Init Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server running on ${url}`))
