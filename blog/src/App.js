import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
