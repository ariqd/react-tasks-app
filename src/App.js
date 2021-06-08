import { BrowserRouter } from "react-router-dom";
// import { useContext } from "react";
import { AuthProvider } from "./context/auth";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
