


'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projects } from './Projectdata.json'; // adjust path as needed

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div>
      {!selectedProject ? (
        <div className="max-w-screen-xl  mt-9 mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-200/90 rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative w-full h-64 bg-gray-200">
                <Image
                  src={project.url}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 flex-grow line-clamp-3">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="fixed inset-0 bg-white z-50 overflow-auto">
          <div className="max-w-5xl mx-auto p-6">
            <button
              className="mb-4 text-blue-600 hover:text-blue-400 cursor-pointer duration-200"
              onClick={() => setSelectedProject(null)}
            >
              ← Back to projects
            </button>
            <div className="relative w-full h-[500px] bg-gray-200 mb-6">
              <Image
                src={selectedProject.url}
                alt={selectedProject.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-lg text-gray-700">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
