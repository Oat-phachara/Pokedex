import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePages from "./pages/home";
import DetailPages from "./pages/detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePages />,
    },
    {
      path: "/detail/:name",
      element: <DetailPages />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
