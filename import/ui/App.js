import React from 'react';
//gql allowed us to write querie in javascript//
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'




const App = ({ data }) => <h1>{data.hi}</h1>


const hiQuery = gql`
{
    hi
}
`;
export default graphql(hiQuery)
(App)