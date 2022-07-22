import React, { useEffect } from "react";

const Name = () => {
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <h1>Name component</h1>
    </div>
  );
};

export default Name;
