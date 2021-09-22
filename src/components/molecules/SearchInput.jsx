import { PrimaryButton } from "../../components/atom/button/PrimaryButton";
import { Input } from "../atom/input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
