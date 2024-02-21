import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  message,
  Row,
  theme,
  Typography,
} from "antd";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TSignIn } from "../types";
import { useSignIn } from "../hooks/useSignIn";
import { setCookie } from "../../../utils/axiosInstanse";
import { PATH_DASHBOARD } from "../../dashboard/constants";

const { Title } = Typography;

const SignInPage = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handlesignIn = useSignIn();

  const onFinish = async (values: TSignIn) => {
    try {
      setLoading(true);
      await handlesignIn({ ...values })
        .then((data) => {
          setLoading(false);
          setCookie("TOKEN-AUTH", data.token, 30);
          navigate(PATH_DASHBOARD.products, { replace: true });
        })
        .catch(() =>
          message.open({
            type: "error",
            content: "Error",
          })
        );
    } catch {
      setLoading(false);
      message.open({
        type: "success",
        content: "Account signup successful",
      });
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ minHeight: isMobile ? "auto" : "100vh", overflow: "hidden" }}>
      <Col xs={24} lg={12}>
        <Flex
          vertical
          align="center"
          justify="center"
          style={{ background: colorPrimary, height: "100%", padding: "1rem" }}
        >
          <Title level={2} style={{ color: "white" }}>
            Welcome back to Antd Admin
          </Title>
        </Flex>
      </Col>
      <Col xs={24} lg={12}>
        <Flex
          vertical
          align={isMobile ? "center" : "flex-start"}
          justify="center"
          gap="middle"
          style={{ height: "100%", padding: "2rem" }}
        >
          <Title>Login</Title>
          <Form
            name="sign-up-form"
            layout="vertical"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
          >
            <Row gutter={[8, 0]}>
              <Col xs={24}>
                <Form.Item<TSignIn>
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your email" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item<TSignIn>
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item<TSignIn> name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Flex align="center" justify="center">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="middle"
                  loading={loading}
                >
                  Continue
                </Button>
              </Flex>
            </Form.Item>
          </Form>
        </Flex>
      </Col>
    </Row>
  );
};

export default SignInPage;
