import {ApolloClient, InMemoryCache} from '@apollo/client'


/** 
 *  
 * Creating apollo client to get connected with Graphql Server (Jobs Api)
 * 
*/
const client=new ApolloClient({
    uri: "https://api.graphql.jobs/",
    cache: new InMemoryCache(),
})

export default client;