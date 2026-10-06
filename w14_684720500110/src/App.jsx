import React from "react";
import { RouterProvider } from "react-router";
import router from "./AppRouter";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
