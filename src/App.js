
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Main from './components/Main'


function App() {
  return (
    
    <>
  
     <Routes>
     <Route path="/" element={<Main/>} />

   </Routes>
   </>
  );
}

export default App;
