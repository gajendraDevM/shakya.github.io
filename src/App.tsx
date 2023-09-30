import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import "./App.css";
import Layout from "./layout";
import Contact from "./pages/contact";
import Home from "./pages/home";
import About from "./pages/about";
import Vfx from "./pages/vfx";
import Editing from "./pages/editing";
import bg from './assets/mbg.jpg'
import ColorGrade from "./pages/colorGrading";
import Jobs from "./pages/jobs";
import Courses from "./pages/courses";
import Career from "./pages/career";
import Films from "./pages/films";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/editing",
        element: <Editing/>,
      },
      {
        path: "/vfx",
        element: <Vfx/>,
      },
      {
        path: "/color-grading",
        element: <ColorGrade/>,
      },
      {
        path: "/jobs",
        element: <Jobs/>,
      },
      {
        path: "/courses",
        element: <Courses/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/careers",
        element: <Career/>,
      },
      {
        path: "/films",
        element: <Films/>,
      },
    ],
  },
]);

function App() {
  return (
    <main className="h-screen w-full fixed bg-cover before:overlay" style={{backgroundImage:`url('${bg}')`}}>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
