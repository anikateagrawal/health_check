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
          path:'*',
          element:<DiseasePredictor/>
        }
      ]
    },
  ])
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
