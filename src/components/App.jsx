import "../styles/App.css";
import { FormProvider } from "./FormContext";

import Header from "./Header";
import Form from "./Form";
import CardPerson from "./CardPerson";

function App() {
  return (
  <>
  <FormProvider>
  <Header/>
  <Form isCreate={true}/>
  <CardPerson/>
  </FormProvider>
  </>
  );
}

export default App;
