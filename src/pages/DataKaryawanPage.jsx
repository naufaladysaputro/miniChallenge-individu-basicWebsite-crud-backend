import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";
import Notification from "../components/Notification";

const DataKaryawanPage = () => {
  const [KaryawanData, setKaryawanData] = useState([]);
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost/pweb/be/read.php");
      if (response.data.data.length >= 0) {
        setKaryawanData(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.error("Error: " + error);
    }
  };
  const deletekaryawan = async (karyawanId) => {
    try {
      await axios.delete(`http://localhost/pweb/be/delete.php/${karyawanId}`);
      setMsg("Data Delete Success");
      setIsError(false);
    } catch (error) {
      setMsg("Data Gagal Edit");
      setIsError(false);
    }
    // Memperbarui updateMemoryList
  };

  return (
    <Layout>
      <div className="z-999">
        <Notification message={msg} isError={isError} />
      </div>
      <div className="mt-5 container mx-auto">
        <h1 className="text-3xl font-semibold mb-3 text-center">
          Data Karyawan
        </h1>

        <div className="mt-4 mb-4">
          <a
            className="bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg"
            href="/tambah_data"
          >
            Tambah Data
          </a>
        </div>
        <table className="w-full border">
          <thead>
            <tr className="bg-yellow-200">
              <th className="border border-black p-2">No</th>
              <th className="border border-black p-2">ID</th>
              <th className="border border-black p-2">Nama</th>
              <th className="border border-black p-2">Devisi</th>
              <th className="border border-black p-2">Umur</th>
              <th className="border border-black p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {KaryawanData.length > 0 ? (
              KaryawanData.map((item, index) => (
                <tr key={item.id} className="bg-white">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{item.id_karyawan}</td>
                  <td className="border p-2">{item.nama}</td>
                  <td className="border p-2">{item.devisi}</td>
                  <td className="border p-2">{item.umur}</td>
                  <td className="border p-2">
                    <div className="grid grid-cols-2 text-center gap-2 px-2">
                      <a
                        className="bg-blue-500 hover-bg-blue-700 text-white p-2 rounded-lg"
                        href={`/edit_data/${item.id}`}
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Apakah Anda yakin ingin menghapus Karyawan ini?"
                            )
                          ) {
                            deletekaryawan(item.id);
                          }
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg"
                        href="/"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="border p-2 text-center">
                  Data Karyawan tidak tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default DataKaryawanPage;
