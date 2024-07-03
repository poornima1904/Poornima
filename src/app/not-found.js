"use client";
import React from "react";
import Link from "next/link";
import Text from "@/components/text/Text";
import { LinkSimple } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "siteTitle",
  description: "Page Not Found",
};

const NotFoundPage = () => {
  return (
    <main
      className="w-constraint py-8 flex flex-col justify-center items-center"
      style={{ height: "70vh" }}
    >
      <h1 className="text-4xl font-bold mt-8 text-center">Page not found</h1>
      <Text className="text-center">
        Sorry! We couldn't find what you were looking for.
        <br />
      </Text>
      <Link
        href="/"
        passHref
        className="my-12 text-center border-b-2 text-cyan-400 border-b-cyan-400 font-semibold inline-flex gap-2 items-center"
      >
        <LinkSimple weight="bold" /> <span>Home Page</span>
      </Link>
    </main>
  );
};

export default NotFoundPage;
