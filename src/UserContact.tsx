import { graphql } from "./gql";

export const UserContact_UserFragment = graphql(`
  fragment UserContact_user on User {
    id
    email
  }
`);
