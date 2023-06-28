import "./App.css";
import Books from "./components/Books";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
