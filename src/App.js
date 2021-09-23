import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/templates/DefaultLayout";

const user = {
  name: "太郎",
  image: "https://source.unsplash.com/FU3vZToCZQ4",
  email: "1234@mail.com",
  phone: "000-1111-2222",
  company: {
    name: "ABC会社"
  },
  website: "https://google.com"
};
export default function App() {
  return (
    // react-routerを使うにはrowserRouterで囲う必要がある
    <BrowserRouter>
      <DefaultLayout className="App">
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
