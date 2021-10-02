import { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.scss";

function App() {
  const [newCardModal, setNewCardModal] = useState(false);

  return (
    <>
      <ToastContainer />
      <Header setNewCardModal={setNewCardModal} />
      <CardContainer
        newCardModal={newCardModal}
        setNewCardModal={setNewCardModal}
      />
    </>
  );
}

export default App;
