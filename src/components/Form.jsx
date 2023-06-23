import { useContext } from "react";
import "../styles/Form.css";
import { FormContext } from "./FormContext";

function Form(){
const { FormData }= useContext(FormContext)

const userData = (e) => {
  e.preventDefault();
  const { value } = e.target;

  const newData = {...formData, value }; /*é o mesmo que if (id === "password")return setFormData({...formData, password: value})*/
  setFormData(newData);
  console.log(newData);
};

const userSave = (e) => {
  e.preventDefault();
  isFormValid()? alert(`${formData.email} usuario logado com sucesso`) : alert('Verifique os campos')
};


  return (
    <>
      <form className="form-inside-input" onSubmit={userSave} noValidate>
        <div className="mb-3 ml-3 bg-info bg-gradient d-flex flex-column justify-content-center align-items-center">
          <div className=" d-flex justify-content-evenly w-100">
            <div>
              <label htmlFor="Nickname" className="form-label">
                Nickname
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
                Password
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
          <button  type="submit" className="btn btn-dark btn-form">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
