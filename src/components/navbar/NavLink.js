import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();

  // Extract the first segment of both the current pathname and the href for comparison
  const isActive = useMemo(() => {
    const currentPathSegment = pathname.slice(1).split("/")[0];
    const hrefPathSegment = href.slice(1).split("/")[0];
    return currentPathSegment === hrefPathSegment;
  }, [href, pathname]);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`py-1 text-xl font-serif sm:text-lg transition-all ${
        isActive ? "!text-cyan-500" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
