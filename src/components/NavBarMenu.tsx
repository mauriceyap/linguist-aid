import { Menu } from "antd";
import React, { FunctionComponent } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface IMenuItem {
  route: string;
  displayText: string;
}
const menuItems: IMenuItem[] = [
  {
    route: "/sign-up",
    displayText: "I want to volunteer!"
  },
  {
    route: "/request-help",
    displayText: "We need help!"
  }
];

interface INavBarMenuProps extends RouteComponentProps {}

const NavBarMenu: FunctionComponent<INavBarMenuProps> = ({
  location: { pathname }
}) => (
  <Menu mode="horizontal" theme="dark" selectedKeys={[pathname]}>
    {menuItems.map(({ route, displayText }) => (
      <Menu.Item key={route}>
        <Link to={route}>{displayText}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

export default withRouter(NavBarMenu);
