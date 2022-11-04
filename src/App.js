import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { User } from "./components/User";
import ErrorPage from "./components/Errorpage";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/*" element={<User />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
