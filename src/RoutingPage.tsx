import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import Layout from "./Components/Layout";
import ChartsPage from "./Pages/ChartsPage";

function RoutingPage() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route
        path="charts"
        element={
          <Layout>
            <ChartsPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default RoutingPage;
