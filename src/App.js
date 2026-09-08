import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/HeaderComp";
import RestoContainer from "./components/RestoContainer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestoMenu from "./components/RestoMenu";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const App = () => {

  // Authentication Logic

  const[userName, setUserName] = useState("")

  useEffect(()=>{
    const userInfo = {
      Name: "Sayali Raut"
    }
    setUserName(userInfo.Name)
  },[])

  return (
    <Provider store={appStore}>
        <userContext.Provider value={{loggedinUser: userName, setUserName}}>
        <div className="parent">
              <HeaderComp/>
              <Outlet/>
        </div>
      </userContext.Provider>
    </Provider>
    
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children:[
      {
        path :'/',
        element: <RestoContainer/>
      },
      {
        path: "/about",
        element : <About/>, 
      }, 
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path :"/restaurant/:restId",
        element:<RestoMenu/>
      }
    ],
    errorElement:  <Error/>
  }, 
  

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)