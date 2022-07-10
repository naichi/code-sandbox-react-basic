import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "",
    exact: true,
    children: <Page2 />
  },
  {
    // : のあとの文字列がURLパラメータでのRoutingを示している
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
