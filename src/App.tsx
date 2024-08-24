import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "@fontsource/inter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="bg-[#131319] text-[#C5C7CA] font-[Inter]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
