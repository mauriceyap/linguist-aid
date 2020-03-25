import { ApiOutlined, TranslationOutlined } from "@ant-design/icons";
import React, { ReactNode } from "react";

interface IMenuItem {
  route: string;
  displayText: string;
  icon: ReactNode;
}
const menuItems: IMenuItem[] = [
  {
    route: "/sign-up",
    displayText: "I want to volunteer!",
    icon: <TranslationOutlined />
  },
  {
    route: "/request-help",
    displayText: "We need help!",
    icon: <ApiOutlined />
  }
];

export default menuItems;
