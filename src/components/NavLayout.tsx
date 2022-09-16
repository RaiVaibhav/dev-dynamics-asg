import useBreakpoint from "@restart/hooks/useBreakpoint";
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import NavLink from "./NavLink";
import Sidebar from "./Sidebar";
import Button from "./Button";
import { useEffect } from "react";
import clsx from "clsx";

const links = [
  { label: "Overview", to: "/admin" },
  { label: "Metrics", to: "/metrics" },
  { label: "Projects", to: "/projects" },
  { label: "Alerts", to: "/alerts" }
];

export default function NavLayout() {
  const [open, setOpen] = useState(false);
  const isSmall = useBreakpoint("sm", "down");
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className="flex overflow-hidden">
      <Sidebar
        open={open}
        setOpen={setOpen}
        title={
          <div className="flex items-center">
            Project Name
          </div>
        }
      >
        <Nav orientation="vertical">
          {links.map((link) => (
            <NavLink
              key={link.to}
              onClick={() => setOpen(false)}
              to={link.to}
              className={clsx((currentPath === link.to) ? 'font-semibold text-gray-600' : 'font-normal text-gray-500')}
            >
              {link.label}
            </NavLink>
          ))}
        </Nav>
        <span className="flex-grow" />

      </Sidebar>
      <main className="flex-grow bg-gray-300">
        {isSmall && (
          <header className="flex items-center px-4 py-4 bg-gray-100">
            <Button className="mr-2" onClick={() => setOpen(true)} >

              <svg className="h-4 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </Button>
            <span className="text-md font-semibold">Project Name</span>
          </header>
        )}
        <Outlet />
      </main>
    </div>
  );
}
