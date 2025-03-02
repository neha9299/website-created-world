import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './componets/Signup' 
import Signin from './components/Signin'
import Home from './componets/Home'

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/signup" element = {<Signup/>} />
    <Route path="/signin" element = {<Signin/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
