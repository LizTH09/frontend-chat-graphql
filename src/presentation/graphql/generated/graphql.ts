import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Chat = {
  __typename?: 'Chat';
  _id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
  userIds: Array<Scalars['String']['output']>;
};

export type Message = {
  __typename?: 'Message';
  _id: Scalars['ID']['output'];
  chatId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChat: Chat;
  createMessage: Message;
  createUser: User;
};


export type MutationCreateChatArgs = {
  userIds: Array<Scalars['String']['input']>;
};


export type MutationCreateMessageArgs = {
  chatId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUserArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getChats: Array<Chat>;
  getMessages: Array<Message>;
  getUser: User;
};


export type QueryGetChatsArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetMessagesArgs = {
  chatId: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  createMessage: Message;
};


export type SubscriptionCreateMessageArgs = {
  chatId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type GetChatsQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetChatsQuery = { __typename?: 'Query', getChats: Array<{ __typename?: 'Chat', _id: string, status?: string | null, userIds: Array<string> }> };

export type CreateMessageMutationVariables = Exact<{
  content?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  chatId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', _id: string, content: string, createdAt: any, userId: string, chatId: string } };

export type GetMessagesQueryVariables = Exact<{
  chatId: Scalars['ID']['input'];
}>;


export type GetMessagesQuery = { __typename?: 'Query', getMessages: Array<{ __typename?: 'Message', _id: string, chatId: string, content: string, createdAt: any, userId: string, user: { __typename?: 'User', _id: string, avatar?: string | null, email: string, firstName?: string | null, lastName?: string | null } }> };

export type SendMessageSubscriptionVariables = Exact<{
  chatId: Scalars['ID']['input'];
}>;


export type SendMessageSubscription = { __typename?: 'Subscription', createMessage: { __typename?: 'Message', _id: string, content: string, createdAt: any, userId: string, chatId: string } };


export const GetChatsDocument = gql`
    query GetChats($userId: ID!) {
  getChats(userId: $userId) {
    _id
    status
    userIds
  }
}
    `;

/**
 * __useGetChatsQuery__
 *
 * To run a query within a React component, call `useGetChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetChatsQuery(baseOptions: Apollo.QueryHookOptions<GetChatsQuery, GetChatsQueryVariables> & ({ variables: GetChatsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, options);
      }
export function useGetChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatsQuery, GetChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, options);
        }
export function useGetChatsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetChatsQuery, GetChatsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, options);
        }
export type GetChatsQueryHookResult = ReturnType<typeof useGetChatsQuery>;
export type GetChatsLazyQueryHookResult = ReturnType<typeof useGetChatsLazyQuery>;
export type GetChatsSuspenseQueryHookResult = ReturnType<typeof useGetChatsSuspenseQuery>;
export type GetChatsQueryResult = Apollo.QueryResult<GetChatsQuery, GetChatsQueryVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage($content: String, $userId: String, $chatId: String) {
  createMessage(content: $content, userId: $userId, chatId: $chatId) {
    _id
    content
    createdAt
    userId
    chatId
  }
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      content: // value for 'content'
 *      userId: // value for 'userId'
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const GetMessagesDocument = gql`
    query GetMessages($chatId: ID!) {
  getMessages(chatId: $chatId) {
    _id
    chatId
    content
    createdAt
    userId
    user {
      _id
      avatar
      email
      firstName
      lastName
    }
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables> & ({ variables: GetMessagesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export function useGetMessagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesSuspenseQueryHookResult = ReturnType<typeof useGetMessagesSuspenseQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const SendMessageDocument = gql`
    subscription sendMessage($chatId: ID!) {
  createMessage(chatId: $chatId) {
    _id
    content
    createdAt
    userId
    chatId
  }
}
    `;

/**
 * __useSendMessageSubscription__
 *
 * To run a query within a React component, call `useSendMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSendMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSendMessageSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useSendMessageSubscription(baseOptions: Apollo.SubscriptionHookOptions<SendMessageSubscription, SendMessageSubscriptionVariables> & ({ variables: SendMessageSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SendMessageSubscription, SendMessageSubscriptionVariables>(SendMessageDocument, options);
      }
export type SendMessageSubscriptionHookResult = ReturnType<typeof useSendMessageSubscription>;
export type SendMessageSubscriptionResult = Apollo.SubscriptionResult<SendMessageSubscription>;