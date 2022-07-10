import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  // 遷移前のページからStateの情報を useLocation() によって受け渡し可能
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
