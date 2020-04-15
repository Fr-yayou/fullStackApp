import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import './register-api';


//This is Graphql language//
//Graphql schema with query//
const typeDefs = `
type Query {
    hi: String
}
`;
//This is a methode//
const resolvers = {
    Query: {
        hi() {
            return "Hello Yanis";
        }
    }
}
//makeExutableSchema expect typeDefs and resolvers//
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
createApolloServer({schema});