import { makeExecutableSchema } from 'graphql-tools';
import { createApolloServer } from 'meteor/apollo';
import merge from 'lodash/merge';
//imported schema from Resolutions.graphsql;
import ResolutionsSchema from '../../../import/api/resolutions/Resolutions.graphql';
//import resolver//
import ResolutionsResolvers from '../../api/resolutions/resolvers';

//hi
const testSchema = `
type Query {
    hi: String
    resolutions:[Resolution]
}
`;

//typeDefs can take an array//
const typeDefs = [
    testSchema,
    ResolutionsSchema
];

//This is a methode resolvers//
const resolver = {
    Query: {
        hi() {
            return "Hello Yanis";
        },
    },
};
//Merge the querie//

const resolvers = merge(resolver, ResolutionsResolvers);
//makeExutableSchema expect typeDefs and resolvers//
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
createApolloServer({schema});