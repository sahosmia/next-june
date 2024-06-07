
import React from "react";
import { MenuLink } from "../_component/MenuLink";

const AuthLayout = ({ children }: { children: HTMLElement }) => {
  const menus = [
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
    { name: "Forgot Password", path: "/forgot-password" },
  ];

 
  return (
    <>
      <nav>
        <ul className="flex gap-2 ">
          {menus.map((item) => (
            <li key={item.name}>
              <MenuLink name={item.name} path={item.path} />
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
