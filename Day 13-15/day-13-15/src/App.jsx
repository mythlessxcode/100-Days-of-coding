import { BrowserRouter, Routes, Route } from "react-router-dom";
import PetAdoptionForm from "./Components/Form";
import Table from "./Components/Table";
import Header from "./Components/Header";
import './App.css'

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg')",
        height: "100vh",
        backgroundSize: "cover"
      }}
    >
      <Header message={"Pet Adoption Form"} />
      <PetAdoptionForm />
    </div>
  );
};
export default App;
