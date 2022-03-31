import Persona from "./pages/Persona"
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <Persona />
      <ToastContainer
      autoClose={2000}
     />
    </>
  )
}
export default App;