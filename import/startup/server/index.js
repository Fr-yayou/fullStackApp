import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';


//this is Graphql//
//Graphql schema with query//
const typeDefs = `
type Query {
    hi: String
}
`;
//this is a methode//
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