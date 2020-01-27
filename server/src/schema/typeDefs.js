const { gql } = require('apollo-server');

module.exports = gql`
  type Article {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    content: String!
    owner: User!
  }

  scalar DateTime

  type User {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    password: String!
    name: String!
    articles: [Article!]
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID!): User
    getAllArticles: [Article]
    getArticle(id: ID!): Article
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
  }
`;
