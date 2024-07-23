import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WebLayout from "./Layouts/WebLayout";
import Home from "./Web/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <WebLayout>
              <Home />
            </WebLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
