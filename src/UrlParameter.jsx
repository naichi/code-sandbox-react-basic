import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // 分割代入によって、useLocation() の返り値からsearch を抽出
  const { search } = useLocation();
  // 標準で用意されている、クエリパラメータをうまい具合にメソッドとかで抽出できるクラスを用いる
  const query = new URLSearchParams(search);
  // console.log(query);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
