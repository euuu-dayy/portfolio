"use client"
import React from "react"
import { useState, useEffect } from "react"
import { ExternalLink, Github } from "lucide-react"

const ProjectsPage = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Load projects from localStorage
    const storedProjects = localStorage.getItem("portfolioProjects")
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects))
    }
  }, [])

  return (
    <section className="section bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-12 text-white">All Projects</h2>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found. Add some from the admin dashboard.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=200&width=400"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-indigo-300 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                      >
                        <span>Code</span>
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsPage