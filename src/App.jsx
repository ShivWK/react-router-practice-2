import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import Contacts from './assets/components/Contacts';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='contacts' element={<Contacts />}/>
        </Route>
      </Routes>
    </Router>
  )
}