import { graphql, makeFragmentData } from "./gql";

export const User_UserFragment = graphql(`
  fragment User_user on User {
    ...UserWithAvatar_user
    ...UserContact_user
  }
`);

const mockData = makeFragmentData(
  {
    id: "user_1",
    username: "aaa",
    avatarUrl: "aaa",
    email: "mail@mail.com",
  },
  User_UserFragment
);
