import React from "react";

import TopAppBar from "../../components/TopAppBar";
import TopTabs from "../../components/TopTabs";
import UserDescription from "../../components/UserDescription";

const Application = () => {
  return (
    <div>
      <TopAppBar />
      <TopTabs />
      <UserDescription />
    </div>
  );
};

export default Application;
