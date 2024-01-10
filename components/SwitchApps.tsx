"use client";

import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { SWITCH_APPS } from "@/constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SwitchApps = () => {
  return (
    <section className="max-container padding-container" data-aos="fade-left">
      <h2 className="semibold-16 text-orange-50 flexStart mt-8 mb-8">
        Switch Apps
      </h2>
      <Tab.Group>
        <Tab.List className="flex gap-2">
          {SWITCH_APPS.map((category) => (
            <Tab
              key={category.title}
              className={({ selected }) =>
                classNames(
                  "w-auto rounded-full py-px px-3 md:py-3 md:px-5 medium-16 md:semibold-16 leading-5 font-lota",
                  selected
                    ? "bg-blue-100 text-white"
                    : "text-blue-100 bg-gray-20"
                )
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-10">
          {SWITCH_APPS.map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className="rounded-xl bg-white grid gap-12 grid-cols-1 md:grid-cols-2"
            >
              <div className="bg-gray-20 rounded-3xl flexCenter px-12 py-10">
                <img src={posts.url} width="100%" height="auto" alt="" />
              </div>
              <ul data-aos="fade-up">
                {posts.items.map((post) => (
                  <li
                    key={post.title}
                    className="p-3 mb-8"
                  >
                    <h3 className="semibold-20 mb-2 leading-5">
                      {post.title}
                    </h3>
                    <p className="regular-14">{post.description}</p>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default SwitchApps;
