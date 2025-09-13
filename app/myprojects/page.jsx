"use client"

import { 
  Code, 
  ExternalLink, 
  Github, 
  Smartphone, 
  Monitor, 
  Database, 
  Palette, 
  Zap, 
  Globe, 
  Layers,
  ChevronRight,
  Star,
  Calendar,
  Users,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: "all", name: "All Projects", icon: Layers },
    { id: "react", name: "react", icon: Globe },
    { id: "nextJS", name: "nextJS", icon: Smartphone },

  ];
/*projects */
  const projects = [
    {
      id: 1,
      title: "flavorDash",
      description: "This is a React-based food ordering application that allows users to browse and order food products. The application is built using modern web development technologies and follows best practices for code organization and structure.",
      category: "react",
      image: "/sc1.png",
      technologies: ["React", "tailwind", "React Router","React Query", "Tailwind"],
      github: "https://github.com/Founder123442432/FlavorDash",
      live: "https://flavor-dash-red.vercel.app/",
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "Primecare",
      description: "PrimeCare is a comprehensive healthcare platform designed to connect patients with medical professionals and provide a range of services, including appointment scheduling, medical record management, and health advice.",
      category: "react",
      image: "/sc4.png",
      technologies: ["React", "Firebase", "Framer Motion", "js"],
      github: "https://github.com/Founder123442432/Primecare",
      live: "https://primecare-nine.vercel.app/",
      status: "In Progress",
      year: "2024"
    },
    {
      id: 3,
      title: "NexTrend",
      description: "This is a feature-rich e-commerce website built using React, Context API, Firebase, Vite, Framer Motion, and React Toster. The website allows users to browse and shop for clothing, with dedicated pages for Men, Women, and Kids. It also includes functionalities such as adding products to a wishlist or cart, checking out, and a robust admin dashboard for managing products and orders.",
      category: "react",
      image: "/sc3.png",
      technologies: ["React", "Context API", "Firebase", "Vite"],
      github: "https://github.com/Founder123442432/NexTrend",
      live: "https://nex-trend-ten.vercel.app/",
      status: "Completed",
      year: "2024"
    },
    {
      id: 4,
      title: "Keeply",
      description: "Keeply is a bookmarking app that allows users to save and organize their favorite websites. With Keeply, users can categorize, search, and access their saved links anytime, anywhere.",
      category: "nextJS",
      image: "/sc2.png",
      technologies: ["Next.js", "Framer Motion", "tailwind", ],
      github: "https://github.com/Founder123442432/Keeply",
      live: "https://keeply-mlvu.vercel.app/",
      status: "Completed",
      year: "2023"
    },
    
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "text-green-400 bg-green-400/10 border-green-400/20";
      case "In Progress": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      default: return "text-blue-400 bg-blue-400/10 border-blue-400/20";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Code className="w-96 h-96 text-purple-500" />
          </div>
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl">
                <Layers className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              A showcase of innovative solutions and creative implementations. Each project represents a unique challenge 
              solved with modern technologies and thoughtful design.
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>{projects.length}+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span> creative solutions </span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span className="lowercase">PATINATED </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <a 
                    href={project.github}
                    target="_blanc"
                    className="p-2 bg-black/50 backdrop-blur-lg rounded-full hover:bg-purple-600 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a 
                   target="_blanc"
                    href={project.live}
                    className="p-2 bg-black/50 backdrop-blur-lg rounded-full hover:bg-purple-600 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none ${
                hoveredProject === project.id ? "opacity-100" : ""
              }`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-12">
          <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with cutting-edge technology and innovative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:wibr8349@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              Start a Project
            </a>
            <a 
              href="https://wa.me/212641615059"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-600"
            >
              Discuss Ideas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}