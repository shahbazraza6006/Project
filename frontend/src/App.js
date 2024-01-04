import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/home';
import Signup from './Pages/Sign-up/Sign';
import Navbars from './components/Navbar/Navbar';
import Contact from './Pages/Contact-us/contactus';
import Rubric from './Pages/Rubric/rubric';
import Essay from './Pages/Essay/Essay';
import Mcq from './Pages/MCQ/Mcq';
import English from './Pages/English/English';
import Maths from './Pages/Maths/Math';
import History from './Pages/History/History';
import Geography from './Pages/Geography/Geography';
import Science from './Pages/Science/Science';
import About from './Pages/About-us/about';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rubric" element={<Rubric />} />
        <Route path="/navbar" element={<Navbars />} />
        <Route path="/essay" element={<Essay />} />
        <Route path="/mcq" element={<Mcq />} />
        <Route path="/english" element={<English />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/history" element={<History />} />
        <Route path="/science" element={<Science />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/about" element={<About />} />
       

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
