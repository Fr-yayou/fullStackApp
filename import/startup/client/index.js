//keep the all the import in the import file to keep controle of everything//
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
//import to connect apollo with the front-end//
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { AppolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//import App ui folder//
import App from '../../ui/App';

// 1 step create a http link to connect apollo with the front//
const httpLink = new HttpLink({
    uri: Meteor.absoluteUrl('graphql')
});
//2 step create a cache
const cache = new InMemoryCache();
// 3 step create a client who take two argument link and cache
const client = new ApolloClient({
    link: httpLink,
    cache,
})
//4 step create a variable and wrap the App in this variable ApolloApp//
const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)

Meteor.startup(() => {
    render(<ApolloApp />, document.getElementById('root'))
});

