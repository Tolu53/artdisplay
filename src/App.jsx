import React, { useState } from 'react'
import { Route , Routes , useNavigate } from 'react-router-dom'
import About from './Pages/About'
import Art from './Pages/Art'
import Film from './Pages/Film'
import Home from './Pages/Home'
import Login from './Pages/Login'

const App = () => {
    const [user,setUser] = useState(null);
  return (
    <div>
        {/* <Login/> */}
         {/* <Home /> */}
        <Film />
        {/* <About /> */}
        {/* <Art /> */}

    </div>
  )
}

export default App