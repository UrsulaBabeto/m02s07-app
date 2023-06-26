import "../styles/App.css";

import { useState, useRef } from "react";

import Header from "./Header";
import Form from "./Form";
import CardPerson from "./CardPerson";

function App() {
  const [userList, setUserList] = useState([
    {
      nickname: "admin",
      age: 44,
      email: "admin@admin.com.br",
      senha: "1234",
    },
    {
      nickname: "nome",
      age: 88,
      email: "email@email.com",
      senha: "5678",
    },
  ]);
  const [list, setList] = useState(userList);
  const userFind = useRef();


  function List(e) {
    const nickname = userFind.current.value;
  }
  return (
    <>
      
        <Header />
        <Form />
        <ul className="row gap-0 row-gap-2 p-4">
          {list.map((user) => {
            return <CardPerson user={user} />;
          })}
        </ul>
     
    </>
  );
}

export default App;
