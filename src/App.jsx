import { useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

const App = () => {
  const [usuario, setUsuario] = useState();
  const temUsuario = Boolean(usuario);
  return (
    <div className="h-screen">
      <Header usuario={usuario} />
      {temUsuario && <ArticleList />}
      {temUsuario || <Form onSubmit={setUsuario} />}
    </div>
  );
};
export default App;
//parei na aula 4/2
