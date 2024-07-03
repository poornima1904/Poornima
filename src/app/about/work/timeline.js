import React from "react";

export const TimelineSection = ({
  className = "",
  title,
  subtitle,
  children,
}) => {
  return (
    <section className={className}>
      <div className="mb-4 sm:mb-0 sm:mr-4 sm:w-[30%] sm:min-w-[30%] sm:max-w-[30%]">
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <div className="text-sm mt-1">{subtitle}</div>
      </div>
      <div className="mt-4 sm:mt-0 ml-0 sm:ml-4">{children}</div>
    </section>
  );
};

export const TimelineView = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};
