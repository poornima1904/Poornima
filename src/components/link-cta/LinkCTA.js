"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, CaretRight } from "@phosphor-icons/react";

const LinkCTA = ({ href, label, isSecondary = false }) => {
  return (
    <Link
      href={href}
      passHref
      className={`group font-serif text-md sm:text-lg py-2 px-4 mt-8 inline-flex gap-3 items-center rounded-xl ${
        isSecondary
          ? "bg-transparent border border-cyan-500 text-cyan-500 shadow-cyan-100/50 hover:shadow-cyan-200/50 active:shadow-cyan-200/50"
          : "bg-cyan-500 text-white shadow-cyan-100 hover:shadow-cyan-200 active:shadow-cyan-200"
      } transition-all shadow-xl hover:shadow-2xl active:shadow-lg`}
    >
      <span>{label}</span>
      {!isSecondary && (
        <div className="relative w-4 h-4">
          <CaretRight
            className="absolute inset-0 opacity-100 scale-100 group-hover:scale-0 transition-all group-hover:opacity-0 group-hover:translate-x-4"
            weight="bold"
          />
          <ArrowRight
            className="absolute inset-0 opacity-0 scale-0 group-hover:scale-100 transition-all group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            weight="bold"
          />
        </div>
      )}
    </Link>
  );
};

export default LinkCTA;
