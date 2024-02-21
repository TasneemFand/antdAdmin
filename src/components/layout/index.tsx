import { Flex } from "antd";
import React from "react";

export const getNoneLayout = (page: React.ReactElement) => page;

export const getDefaultLayout = (page: React.ReactElement) => {
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{ height: "100%", padding: "1rem", textAlign: "center" }}
    >
      {page}
    </Flex>
  );
};
