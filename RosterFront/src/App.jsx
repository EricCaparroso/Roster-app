import { BrowserRouter } from "react-router-dom";

import "./App.css";
import TutorialApp from "./components/tutorialApp/TutorialApp";
import { EmployeeProvider } from "./components/context/EmployeeContext";

function App() {
  return (
    <div className="App">
      <EmployeeProvider>
      <BrowserRouter>
        <TutorialApp />
      </BrowserRouter>
      </EmployeeProvider>
    </div>
  );
}

export default App;
