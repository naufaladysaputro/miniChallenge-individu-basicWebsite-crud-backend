import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Notification from "./Notification";

function FormEditData() {
  const [idKaryawan, setIdKaryawan] = useState("");
  const [nama, setNama] = useState("");
  const [devisi, setDevisi] = useState("");
  const [umur, setUmur] = useState("");
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/pweb/be/read_by_id.php/${id}`
        );

        // Inisialisasi nilai input dengan nilai dari server
        setIdKaryawan(response.data.data.id_karyawan);
        setNama(response.data.data.nama);
        setDevisi(response.data.data.devisi);
        setUmur(response.data.data.umur);
      } catch (error) {
        console.error("Error: " + error);
      }
    };
    getData();
  }, [id]);

  const updateKaryawan = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost/pweb/be/update.php/${id}`, {
        id_karyawan: idKaryawan,
        nama: nama,
        devisi: devisi,
        umur: umur,
      });
      setMsg("Data Berhasil Edit");
      setIsError(false);
    } catch (error) {
      if (error.response) {
        setMsg("Data Berhasil Edit");
        setIsError(true);
      }
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="z-999">
        <Notification message={msg} isError={isError} />
      </div>
      <div className="p-4 lg:w-1/2">
        <form
          onSubmit={updateKaryawan}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="idkaryawan"
            >
              ID Karyawan
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="idkaryawan"
              type="text"
              placeholder="Id Karyawan "
              value={idKaryawan || ""} // Menambahkan nilai awal
              onChange={(e) => setIdKaryawan(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nama"
            >
              Nama
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              type="text"
              placeholder="Nama"
              value={nama || ""} // Menambahkan nilai awal
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-6">
          <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="devisi"
            >
              Devisi
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="devisi"
              type="text"
              placeholder="Devisi"
              value={devisi || ""} // Menambahkan nilai awal
              onChange={(e) => setDevisi(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="umur"
            >
              Umur
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="umur"
              type="text"
              placeholder="Umur"
              value={umur || ""} // Menambahkan nilai awal
              onChange={(e) => setUmur(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Edit Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEditData;
