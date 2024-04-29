import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DataKaryawanPage from "./pages/DataKaryawanPage";
import TambahDataPage from "./pages/TambahDataPage";
import EditDataPage from "./pages/EditDataPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data_mhs" element={<DataKaryawanPage />} />
        <Route path="/tambah_data" element={<TambahDataPage />} />
        <Route path="/edit_data/:id" element={<EditDataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
