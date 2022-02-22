import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';



const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const client = new ApolloClient({
     link: httpLink,
    cache: new InMemoryCache({
      typePolicies: {
        Issue: {
          keyFields: ["number"],
        }
      },
})
});

export default client;