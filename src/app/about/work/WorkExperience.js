"use client";
import React from "react";
import {
  ArrowSquareOut,
  FileArrowDown,
  ArrowDown,
} from "@phosphor-icons/react";
import FadeInSection from "@/components/fade-in-section/FadeInSection";
import Text from "@/components/text/Text";
import Link from "next/link";
import { TimelineSection, TimelineView } from "./timeline";

const data = [
  {
    title: "Backend Developer Intern",
    company: {
      name: "Margsoft Technologies",
    },
    from: "May 2023",
    to: "August 2023",
    description: [
      "Led the development of a streamlined Inventory Management Backend project using Python and Django, enhancing real-time tracking and control for over 100 business clients.",
      "Engineered and deployed 10+ REST APIs for effective management of stock levels, product particulars, and sales data, boosting data accessibility and operational efficiency.",
      "Enhanced inventory administration by designing user-friendly interfaces for item management, benefiting 50+ users daily through Django’s robust capabilities.",
    ],
  },
  {
    title: "Open Source Contributor",
    company: {
      name: "Social Summer Of Code’ 22",
    },
    from: "Aug 2022",
    to: "Oct 2022",
    description: [
      "Contributed to the development of the Academica App, a dynamic student community platform, successfully attracting over 1,000 users through innovative features and user-centric design.",
      "Pioneered the integration of study rooms, Discord servers, and real-time study statistics into the app, significantly enhancing user engagement and collaborative learning experiences.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-24">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl font-medium">Work Experience</h2>
        <Text>
          Here&apos;s what I have done in my career as a professional.
        </Text>
      </FadeInSection>
      {data.map((item, index) => (
        <TimelineView key={index} className="mt-16">
          <FadeInSection className="flex flex-col sm:flex-row snap-start">
            <TimelineSection
              title={item.title}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8"
              subtitle={
                <div className="mt-3">
                  <p className="text-gray-500 text-xs uppercase">
                    {item.from} - {item.to}
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-gray-600 text-lg">{item.company.name}</p>
                    {item.company.url && (
                      <a
                        title="Company website"
                        href={item.company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                      >
                        <ArrowSquareOut weight="bold" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              }
            >
              <ul className="list-disc space-y-2 ml-4 sm:ml-0 sm:text-lg">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>
                    <p className="leading-normal font-light text-gray-700">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </TimelineSection>
          </FadeInSection>
        </TimelineView>
      ))}
    </section>
  );
};

export default WorkExperience;
