import { graphql } from "./gql";

export const UserWithAvatar_UserFragment = graphql(`
  fragment UserWithAvatar_user on User {
    id
    username
    avatarUrl
  }
`);
