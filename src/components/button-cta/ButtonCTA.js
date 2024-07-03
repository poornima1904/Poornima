"use client";
import React from "react";

const ButtonCTA = ({ children, onClick, className, type, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`"group bg-cyan-500 disabled:bg-cyan-200 disabled:cursor-not-allowed font-serif text-white text-lg py-2 px-4 mt-8 inline-flex items-center rounded-xl transition-all shadow-xl shadow-cyan-100 hover:shadow-2xl hover:shadow-cyan-200 active:shadow-lg active:shadow-cyan-200" ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
