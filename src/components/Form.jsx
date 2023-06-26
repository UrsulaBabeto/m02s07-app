import { useState } from "react";
import "../styles/Form.css";

function Form() {
  const [formData, setFormData] = useState({
    nickname: "",
    idade: "",
    email: "",
    senha: "",
  });

  const userData = (e) => {
    e.preventDefault();
    const { value,id } = e.target;
    
    const newData = {
      ...formData,
     [id]: value,    }; /*é o mesmo que if (id === "password")return setFormData({...formData, password: value})*/
    setFormData(newData);
    console.log(newData);
  };

  const userSave = (e) => {
    e.preventDefault();
    return (
      <div className="card bg-light">
        <div className="card-header text-center">Dados do Usuário</div>
        <div className="card-body">
          <p className="card-title">{e.nickname}</p>
          <p className="card-text">Idade: {e.idade}</p>
          <p className="card-text">Email: {e.email}</p>
        </div>
      </div>
    );
   }
 

  return (
    <>
      <form className="form-inside-input" onSubmit={userSave}>
        <div className="mb-3 ml-3 bg-info bg-gradient d-flex flex-column justify-content-center align-items-center">
          <div className=" d-flex justify-content-evenly w-100">
            <div>
              <label htmlFor="Nickname" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form"
                id="nickname"
                placeholder="UserName"
                value={formData.nickname}
                onChange={userData}
              />
            </div>
            <div>
              <label htmlFor="Age" className="form-label">
                Idade
              </label>
              <input
                type="number"
                className="form"
                id="idade"
                placeholder="35"
                value={formData.idade}
                onChange={userData}
              />
            </div>
          </div>

          <div className=" d-flex justify-content-evenly w-100">
            <div className="pl-2">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form"
                id="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={userData}
              />
            </div>
            <div>
              <label htmlFor="Password" className="form-label ">
                Senha
              </label>
              <input
                type="password"
                className="form"
                id="senha"
                placeholder="******"
                value={formData.senha}
                onChange={userData}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-dark btn-form">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
