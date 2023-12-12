import "./App.css";
import "./components/Symptom";
import Nav from "./components/Nav";
import DiseasePredictor from "./components/DiseasePredictor";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import SymptomPredictor from "./components/SymptomPredictor";

function App() {
  const Layout=()=>{
    return <div>
      <Nav />
      <Outlet/>
      <h3 style={{color:'white'}}> Free Server takes time to deploy! Please wait 5 mins for app to load data!</h3>
    </div>
  }

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/symptomPrediction',
          element:<SymptomPredictor/>
        },
        {
          path:'/',
          element:<DiseasePredictor/>
        },
        {
          path:'/*',
          element:<DiseasePredictor/>
        }
      ]
    },
  ],{basename:"/health_check"})
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
