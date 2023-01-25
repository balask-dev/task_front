import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Photos from "./components/photo/Photos";
 import PicDetail from "./components/photo/PicDetail";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Photos />} exact />
          <Route path="/add" element={<Add />} exact />
          <Route path="/Photos" element={<Photos />} exact />
           <Route path="/photos/:id" element={<PicDetail />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
