// config/apollo.js

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // por defecto la URL seria '/graphql'
  cache: new InMemoryCache()
});

