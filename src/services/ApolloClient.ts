import ApolloClient from "apollo-boost";

const GRAPHQL_ENDPOINT = "https://api.thegraph.com/subgraphs/name/chimpytuts/darkpools-main-arbitrum";

const apolloClient = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
});

export default apolloClient;
