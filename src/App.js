import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import SignUp from "./Signup";
import Home from "./Home";
import Login from "./Login";
import Body from "./Body";
import { UserProvider } from "./context";
import { Provider } from "react-redux";
import appStore from "./store/store";
import Profile from "./component/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/login", element: <Login /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <Provider store={appStore}>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </Provider>
    </div>
  );
}

export default App;
