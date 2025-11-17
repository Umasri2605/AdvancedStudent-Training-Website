import { Outlet } from "react-router-dom"
// import Students from "./features/students/StudentsTable"
import Navbar from "./components/Navbar"
import Home from "./features/Auth/Home"
function App() {
 return (
      <div>
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
  )
}

export default App;