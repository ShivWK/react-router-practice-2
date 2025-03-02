import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './assets/components/Home';
import Contacts from './assets/components/Contacts';
import About from './assets/components/About';

export default function App() {
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path='/' element={<Home />}>
  //         <Route path='contacts' element={<Contacts />} />
  //         <Route path='about' element={<About />} />
  //       </Route>
  //     </Routes>
  //   </Router>
  // )

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<h1>Home page</h1>}
        loader={async ()=> {
          return null;
        }}
      />
      <Route
        path="protected"
        element={<h1>Super secret info here</h1>}
        loader={async ()=> {
          let rand = Math.random() * 2;
            setTimeout(()=> {
              console.log("Protected Route");
            }, rand);
  
            return null;
        }}
      >
        <Route 
          path="nestedProtected" 
          element={<h1>This is nested protected route</h1>}
          loader={async ()=> {
            let rand = Math.random() * 2;
            setTimeout(()=> {
              console.log("nested Protected Route");
            }, rand);
  
            return null;
          }}
        />
      </Route>
      <Route path="login" element={<h1>Login page goes here</h1>} />
    </Route>
  ))

  return <RouterProvider router={router}/> 
}