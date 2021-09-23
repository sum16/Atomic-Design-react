import styled from "styled-components";
import { Card } from "../../atom/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDL>
        <dt>{user.email}</dt>
        <dd>aaaaa@mail.com</dd>
        <dt>{user.phone}</dt>
        <dd>000-9999-1111</dd>
        <dt>{user.company.name}</dt>
        <dd>hoge会社</dd>
        <dt>{user.website}</dt>
        <dd>abc.com</dd>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
