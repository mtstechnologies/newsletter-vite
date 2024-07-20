import { useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

const App = () => {
  const [usuario, setUsuario] = useState();
  const temUsuario = Boolean(usuario);
  return (
    <>
      <Header usuario={usuario} />
      {temUsuario && <ArticleList />}
      {temUsuario || <Form onSubmit={setUsuario} />}
    </>
  );
};
export default App;
