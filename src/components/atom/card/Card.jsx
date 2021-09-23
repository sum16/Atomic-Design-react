import styled from "styled-components";

export const Card = (props) => {
  //UserCardコンポーネントのdiv以下をchildrenを取得
  // children という props を使い、以下のようにして受け取った子要素を出力することができる
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
