"use client";
import React, { useRef, useState } from "react";
import FadeInSection from "@/components/fade-in-section/FadeInSection";
import Text from "@/components/text/Text";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Item = ({ children }) => {
  return (
    <FadeInSection
      delay={0.1}
      className="px-6 bg-gradient-to-br from-cyan-400 to-cyan-500 text-white py-2 shadow sm:text-xl self-start rounded-xl"
    >
      {children}
    </FadeInSection>
  );
};

export const TechStack = () => {
  const { scrollY } = useScroll();
  const sidebar = useRef(null);

  const [activeView, setActiveView] = useState("languages");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const sidebarTop = sidebar.current.getBoundingClientRect().top;

    const sections = [
      { id: "languages", elem: document.getElementById("languages") },
      { id: "frontend", elem: document.getElementById("frontend") },
      { id: "inbetween", elem: document.getElementById("inbetween") },
      { id: "backend", elem: document.getElementById("backend") },
      { id: "tools", elem: document.getElementById("tools") },
    ];

    const diffs = sections.map((section) => {
      const diff = section.elem
        ? section.elem.getBoundingClientRect().top - sidebarTop
        : Infinity;
      return { id: section.id, diff };
    });

    const activeViewElem = diffs.reduce((prev, curr) =>
      Math.abs(curr.diff) < Math.abs(prev.diff) ? curr : prev
    );

    if (activeView !== activeViewElem.id) {
      setActiveView(activeViewElem.id);
    }
  });

  return (
    <section id="tech-stack" className="pb-24 pt-16">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl font-medium">Tech Stack</h2>
        <Text>Languages, libraries, and frameworks I know and use.</Text>
      </FadeInSection>
      <div className="flex gap-12 mt-20">
        <div
          ref={sidebar}
          className="space-y-8 h-fit sticky top-[25%] left-0 text-gray-800"
        >
          <h3
            className={`text-xl sm:text-2xl ${
              activeView === "languages" ? "text-cyan-400" : null
            }`}
          >
            Languages
          </h3>
          <h3
            className={`text-xl sm:text-2xl ${
              activeView === "frontend" ? "text-cyan-400" : null
            }`}
          >
            Front End
          </h3>
          <h3
            className={`text-xl sm:text-2xl ${
              activeView === "inbetween" ? "text-cyan-400" : null
            }`}
          >
            In Between
          </h3>
          <h3
            className={`text-xl sm:text-2xl ${
              activeView === "backend" ? "text-cyan-400" : null
            }`}
          >
            Back End
          </h3>
          <h3
            className={`text-xl sm:text-2xl ${
              activeView === "tools" ? "text-cyan-400" : null
            }`}
          >
            Tools
          </h3>
        </div>
        <div className="flex-1 sm:ml-12 space-y-24">
          {/* Sections for languages, frontend, etc. */}
          <div
            id="languages"
            className={`bg-white flex flex-col gap-2 rounded-2xl w-full `}
          >
            <Item>HTML</Item>
            <Item>CSS</Item>
            <Item>Javascript</Item>
            <Item>Python</Item>
            <Item>C++</Item>
            <Item>Java</Item>
          </div>
          <div
            id="frontend"
            className={`bg-white flex flex-col gap-2 rounded-2xl w-full `}
          >
            <Item>Reactjs</Item>
            <Item>Nextjs</Item>
            <Item>CSS-in-JS</Item>
            <Item>TailwindCSS</Item>
          </div>
          <div
            id="inbetween"
            className={`bg-white flex flex-col gap-2 rounded-2xl w-full `}
          >
            <Item>Rest APIs</Item>
            <Item>Google Cloud Platform</Item>
            <Item>AWS</Item>
          </div>
          <div
            id="backend"
            className={`bg-white flex flex-col gap-2 rounded-2xl w-full `}
          >
            <Item>Node.js</Item>
            <Item>Express.js</Item>
            <Item>PostgreSQL</Item>
            <Item>MySQL</Item>
            <Item>Firebase</Item>
          </div>
          <div
            id="tools"
            className={`bg-white flex flex-col gap-2 rounded-2xl w-full `}
          >
            <Item>Atom</Item>
            <Item>VSCode</Item>
            <Item>Git</Item>
            <Item>Notion</Item>
          </div>
        </div>
      </div>
    </section>
  );
};
