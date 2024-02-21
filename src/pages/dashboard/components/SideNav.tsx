import { Layout, SiderProps } from "antd";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../constants";
import { useRef } from "react";

const { Sider } = Layout;

type SideNavProps = SiderProps;

const SideNav = ({ ...others }: SideNavProps) => {
  const nodeRef = useRef(null);

  return (
    <Sider ref={nodeRef} breakpoint="lg" collapsedWidth="0" {...others}>
      <Link to={PATH_DASHBOARD.products}>Products</Link>
    </Sider>
  );
};

export default SideNav;
