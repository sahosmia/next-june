"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const MenuLink = ({
  path,
  name,
  prefetch = true,
}: {
  path: string;
  name: string;
  prefetch?: boolean;
}) => {
  const pathName = usePathname();
  const isActive = pathName.startsWith(path);

  return (
    
      <Link
        prefetch={prefetch}
        href={path}
        className={`${
          isActive && "text-red-800"
        } hover:text-red-700 font-bold transition-all`}
      >
        {name}
      </Link>
    
  );
};
