"use client";
import React from "react";

const ExternalLink = ({ href, className, children, ...props }) => {
  if (!href) {
    console.error("ExternalLink requires an href");
    return null; // Or render some fallback
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${className ? className : ""}`}
      {...props}
    >
      {children}
    </a>
  );
};
export default ExternalLink;
