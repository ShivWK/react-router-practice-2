import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  redirect,
} from "react-router-dom";

import Layout from "./components/Layout";
import Protected, { loader } from "./components/Protected";
import NestedProtected, { nestedLoader } from "./components/NestedProtected";
import Login, { action } from "./components/LogIn";
import { requireAuth } from "./util";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout />}
        loader={async () => {
          console.log("Layout parent");
          return null;
        }}
      >
        <Route index element={<h1>Home page</h1>} />

        <Route path="protected" element={<Protected />} loader={loader}>
          <Route
            path="nestedProtected1"
            element={<NestedProtected />}
            loader={nestedLoader}
          />
        </Route>
        <Route 
          path="login" 
          action={action} 
          element={<Login />} 
          loader={async function({request}) {
            console.log(request);
          }}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
