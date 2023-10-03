import { UserWithAvatar_UserFragment } from "./USerWithAvatar";
import { UserContact_UserFragment } from "./UserContact";
import { graphql, makeFragmentData } from "./gql";

export const User_UserFragment = graphql(`
  fragment User_user on User {
    ...UserWithAvatar_user
    ...UserContact_user
  }
`);

const mockData = makeFragmentData(
  {
    ...makeFragmentData(
      {
        username: "aaa",
        avatarUrl: "aaa",
        id: "user_1",
      },
      UserWithAvatar_UserFragment
    ),
    ...makeFragmentData({ email: "a", id: "a" }, UserContact_UserFragment),
  },
  User_UserFragment
);
