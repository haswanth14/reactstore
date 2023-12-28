import {outlet} from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer} from "react-toastify";

function App() {
  
  return (
    < >
    <ToastContainer />
    <Navigation />
    <main className="py-3">
      <outlet />
    </main>
    </> 
  );
}

export default App;