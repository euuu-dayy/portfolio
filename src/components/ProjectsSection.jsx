
"use client"
import React from "react"
import { useState, useEffect } from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const ProjectsSection = ({ ref }) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Load projects from localStorage
    const storedProjects = localStorage.getItem("portfolioProjects")
    if (storedProjects) {
      const allProjects = JSON.parse(storedProjects)
      // First show featured projects, then fill with non-featured ones if needed
      const featuredProjects = allProjects.filter((p) => p.featured)
      const nonFeaturedProjects = allProjects.filter((p) => !p.featured)

      // If we have more than 3 featured projects, just take the first 3
      // If we have less than 3, add some non-featured ones
      let displayProjects = []

      if (featuredProjects.length >= 3) {
        displayProjects = featuredProjects.slice(0, 3)
      } else {
        displayProjects = [...featuredProjects, ...nonFeaturedProjects.slice(0, 3 - featuredProjects.length)]
      }

      setProjects(displayProjects)
    }
  }, [])

  return (
    <section id="projects" ref={ref} className="section bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-12 text-white">Featured Projects</h2>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found. Add some from the admin dashboard.</p>
          </div>
        ) : (
          <>
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

            <div className="mt-12 text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md text-white font-medium transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection