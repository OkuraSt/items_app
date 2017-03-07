/**
 * Created by Okura on 20/02/2017.
 */

import ApolloClient, { createNetworkInterface } from 'apollo-client';
const client = new ApolloClient({
  ssrMode: true,
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql' }),
});
export default client;
