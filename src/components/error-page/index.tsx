import { Flex } from "antd";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as {
    statusText?: string;
    status?: string;
    message?: string;
  };
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{ height: "100%", padding: "1rem", textAlign: "center" }}
    >
      <h1>oops</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Flex>
  );
}
