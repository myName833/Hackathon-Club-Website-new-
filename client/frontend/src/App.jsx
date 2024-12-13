import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import CalendarPage from './pages/calendar';
import AboutPage from './pages/about';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/calendar' element={<CalendarPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
