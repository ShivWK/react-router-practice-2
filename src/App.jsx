import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import Contacts from './assets/components/Contacts';
import About from './assets/components/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='contacts' element={<Contacts />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}