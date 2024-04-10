import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/*' element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
