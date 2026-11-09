import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThridPage from "./ThirdPage";

export default () => {
  return (
    <>
      <div style={{ maxWidth: "1440px", overflowX: "hidden", margin: "auto" }}>
        <DashboardLayout>
          <FirstPage />
          <SecondPage />
          <ThridPage />
        </DashboardLayout>
      </div>
    </>
  );
};
