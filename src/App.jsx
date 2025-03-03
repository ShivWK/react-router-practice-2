import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider,
  redirect,
  Outlet
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
    <Route 
      path="/" 
      element={<Layout />}
      loader={async ()=> {
        console.log("Layout parent");
        return null;
      }}
    >
      <Route
        index
        element={<h1>Home page</h1>}
        loader={async ()=> {
          console.log("hi");
          return null;
        }}
      />
      <Route
        path="protected"
        element={<div><h1>Super secret info here</h1><Outlet /></div>}
        loader={async ()=> {
          console.log("protected parent");
          return null;
        }}
      >
        <Route 
          path="nestedProtected1" 
          element={<h1>This is nested protected route 1</h1>}
          loader={async ()=> {
              console.log("nested Protected Route 1");
            return null;
          }}
        />

        <Route 
          path="nestedProtected2" 
          element={<h1>This is nested protected route 2</h1>}
          loader={async ()=> {
              console.log("nested Protected Route 2");
            return null;
          }}
        />

        <Route 
          path="nestedProtected3" 
          element={<h1>This is nested protected route 3</h1>}
          loader={async ()=> {
              console.log("nested Protected Route 3");
            return null;
          }}
        />
      </Route>
      <Route path="login" element={<h1>Login page goes here</h1>} />
    </Route>
  ))

  return <RouterProvider router={router}/> 
}