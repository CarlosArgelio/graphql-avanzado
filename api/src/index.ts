import { ApolloServer } from 'apollo-server'
import { readFileSync } from 'fs'
import { join } from 'path'
import resolvers from './resolvers'

const typeDefs = readFileSync(join(__dirname, './schema.graphql'), 'utf-8')

// 3 - Init Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server running on ${url}`))
