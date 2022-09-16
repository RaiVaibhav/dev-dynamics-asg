import { Dialog, Transition } from "@headlessui/react";
import useBreakpoint from "@restart/hooks/useBreakpoint";
import React, { Fragment } from "react";
import Button from "./Button";

interface SidebarProps {
  children?: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  title?: React.ReactNode;
  width?: number;
}

function Sidebar({
  children,
  open,
  setOpen,
  title,
  width = 280
}: SidebarProps) {
  const isSmall = useBreakpoint("sm", "down");

  if (setOpen && isSmall) {
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 overflow-hidden "
          open={open}
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 left-0 pr-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative w-screen" style={{ width }}>
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div className="flex justify-between items-center px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-bold">
                        {title}
                      </Dialog.Title>
                      <Button onClick={() => setOpen(false)}>
                        <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Button>
                    </div>
                    <div className="relative flex flex-col flex-1 mt-6 px-4 sm:px-6">
                      {children}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
  return (
    <div
      className="flex flex-col flex-shrink-0 min-h-screen"
      style={{ width }}
    >
      {title && (
        <div className="px-6 py-8">
          <h2 className="font-bold">{title}</h2>
        </div>
      )}
      <div className="flex flex-col flex-1 px-6">{children}</div>
    </div>
  );
}

export default Sidebar;