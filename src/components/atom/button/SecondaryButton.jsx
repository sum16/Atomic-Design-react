import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//共通で使用するベースのボタンデザインをもたせる
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
