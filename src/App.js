import Input from "./components/Input";

import styles from './App.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestingPage from "./pages/TestingPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage style={styles.input_container} />} />
            <Route path='/tp' element={<TestingPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
