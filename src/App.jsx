import './App.css';

import { Routes, Route } from "react-router-dom"
import { Web } from './components/Web'



const App = () => { 
//Solo code JS

  return (
    
      <Routes>
          <Route path="/home" element={<Web/>}/>
          <Route path="/proyects" element={<Web/>}/>
          <Route path="/resume" element={<Web/>}/>
       </Routes>
   
    )
}
export { App } 
