import React from "react";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex w-full justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="text-3xl font-semibold">
            <p>Naufal Ady Saputro</p>
          </div>
          <div className="text-lg mt-2">
            <a
              href="/data_mhs"
              className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
            >
              Go to Data Karyawan Page
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
