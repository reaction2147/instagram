import React, { useEffect } from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";

function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);

  return (
    <>
      <div className="bg-white">
        <Header />
      </div>
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </>
  );
}

export default Dashboard;
