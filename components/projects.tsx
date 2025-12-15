"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Projectcard } from "./ui/projectcard";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("professional");
  return (
    <div>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 md:mt-28 lg:mt-32 2xl:mt-36">
        <div className=" flex justify-center space-x-5">
          <Button onClick={() => setSelectedProject("professional")}>
            Professional Project
          </Button>
          <Button onClick={() => setSelectedProject("personal")}>
            Personal Project
          </Button>
        </div>
        <Projectcard project={selectedProject} />
      </div>
    </div>
  );
};
