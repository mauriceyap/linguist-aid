import { Menu } from "antd";
import { MenuProps } from "antd/lib/menu";
import React, { FunctionComponent } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

import menuItems from "../const/menuItems";

import "./navBarMenu.scss";

interface INavBarMenuProps extends RouteComponentProps {
  mode: MenuProps["mode"];
}

const NavBarMenu: FunctionComponent<INavBarMenuProps> = ({
  location: { pathname },
  mode
}) => (
  <Menu
    mode={mode}
    theme="dark"
    selectedKeys={[pathname]}
    className="nav-bar-menu"
  >
    {menuItems.map(({ route, displayText, icon }) => (
      <Menu.Item key={route}>
        <Link to={route}>
          {icon}
          <span className="nav-bar-menu__link">{displayText}</span>
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

export default withRouter(NavBarMenu);
