import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Counter from "./Counter";

function App() {
    
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Counter/>}> </Route>
        </Routes>
      </Router>
    );
}

export default App;
