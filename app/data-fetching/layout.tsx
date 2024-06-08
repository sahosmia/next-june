import Link from "next/link";
import React, { ReactNode } from "react";

const DataFetchingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex gap-3">
        <Link href="/data-fetching/one">One</Link>
        <Link href="/data-fetching/two">Two</Link>
        <Link href="/data-fetching/three">Three</Link>
        <Link href="/data-fetching/four">Four</Link>
      </div>
      {children}
    </>
  );
};

export default DataFetchingLayout;
