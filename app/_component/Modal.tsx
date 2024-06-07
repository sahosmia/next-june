import React, { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10">
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded  p-4 bg-blue-200">
        {children}
      </div>
    </div>
  );
};

export default Modal;
