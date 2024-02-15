"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>
        My{" "}
        <span className="text-indigo-700 dark:text-indigo-500">Experience</span>
      </SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "2px solid #4338ca",
                borderRadius: "10px",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #4338ca"
                    : "0.4rem solid #4338ca",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "#4338ca",
                fontSize: "1.5rem",
                color: "#fff",
              }}
              dateClassName={"mx-0 xl:mx-5"}
            >
              <h3 className="font-semibold capitalize text-indigo-700 dark:text-indigo-500">
                {item.title}
              </h3>
              <p className="!mt-0 !font-black">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
