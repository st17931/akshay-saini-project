import Header from "./Header";
import SearchBox from "./SearchBox";
import Body from "./Body";
import About from "./About";
import Error from "./Error";
import { createBrowserRouter, Outlet } from "react-router-dom"
import Contact from "./Contact";

const App = ()=>{
    
    return(
        <>
          <Header />
          
          <SearchBox />
          
          <Outlet />
        </>
    )
}

const AppRouter = createBrowserRouter([
  {
      path:"/",
      element: <App />,
      errorElement: <Error />,
      children:[
        {
          path:"/",
          element: <Body/>
        },
        {
          path:"/about",
          element: <About />
        },
        {
          path:"/contact",
          element: <Contact/>
        }
      ]
  },
  
])



export default AppRouter;