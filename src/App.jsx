import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import UserRouter from "./components/UserRouter";
import { UserDataProvider } from "./components/contexts/UseContext";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <UserDataProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<UserRouter />} />
            </Routes>
          </BrowserRouter>
        </UserDataProvider>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
