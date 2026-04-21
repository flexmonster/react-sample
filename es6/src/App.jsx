import { BrowserRouter } from "react-router";
import "./App.css";

import Header from "./components/UIElements/Header";
import DemoContainer from "./components/UIElements/DemoContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="wrap">
          <DemoContainer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
