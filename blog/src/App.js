import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { CookiesProvider } from 'react-cookie';
function App() {
  return (
    <>
      <CookiesProvider>
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
      </CookiesProvider>
    </>
  );
}

export default App;
