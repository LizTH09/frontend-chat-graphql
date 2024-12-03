import { ApolloClient, createHttpLink, InMemoryCache, split } from "@apollo/client"
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from "@apollo/client/utilities"
import { createClient } from "graphql-ws"

const getClient = () => {
    const linkGraphql = createHttpLink({
        uri: `${import.meta.env.VITE_MAIN_SERVER_API}/graphql`
    })

    const linkWs = new GraphQLWsLink(
        createClient({
            url: `${import.meta.env.VITE_MAIN_SERVER_API}/graphql`
        })
    )

    const splitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query)
            
            return definition.kind === "OperationDefinition" && definition.operation === "subscription"
        },
        linkWs,
        linkGraphql
    )

    const client = new ApolloClient({
        link: splitLink,
        cache: new InMemoryCache()
    })

    return client
}

const client = getClient()

export default client