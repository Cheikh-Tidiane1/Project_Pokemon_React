import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DetailPokemon from "../pages/DetailsPokemon";
import MentionsLegales from "../pages/MentionsLegales";
import ErrorPage from "../pages/404";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/DetailPokemon/:id",
        element: <DetailPokemon />
      },
      {
        path: "/MentionsLegales",
        element: <MentionsLegales />
      }
    ]
  }
]);


export default router ;
