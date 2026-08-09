import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default layout;
