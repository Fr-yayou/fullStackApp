import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import ResolutionForm from './ResolutionForm';

const App = ({ data }) => {
    if (data.loading) return <div>loading</div>;
  return (
    <div>
          <h1>{data.hi}</h1>
          <ResolutionForm/>
          <ul>
              {data.resolutions.map(resolution => (
                  <li key={resolution._id}>{resolution.name}</li>
              ))}
          </ul>
    </div>
  );
};

const hiQuery = gql`
  query Resolutions{
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(hiQuery)(App);