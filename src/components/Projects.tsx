
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Calendar } from "lucide-react";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Cinematic Travel Documentary",
    category: "documentary",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    year: 2023,
    client: "Discovery Channel",
  },
  {
    id: 2,
    title: "Commercial Ad Campaign",
    category: "commercial",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    year: 2023,
    client: "Nike",
  },
  {
    id: 3,
    title: "Music Video Production",
    category: "music",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    year: 2022,
    client: "Universal Music",
  },
  {
    id: 4,
    title: "Short Film Editing",
    category: "film",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    year: 2022,
    client: "Independent Production",
  },
  {
    id: 5,
    title: "Corporate Brand Video",
    category: "corporate",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    year: 2021,
    client: "Microsoft",
  },
  {
    id: 6,
    title: "Wedding Highlight Film",
    category: "wedding",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    year: 2021,
    client: "Private Client",
  },
];

// Filter categories
const categories = [
  { value: "all", label: "All Work" },
  { value: "documentary", label: "Documentary" },
  { value: "commercial", label: "Commercial" },
  { value: "music", label: "Music Video" },
  { value: "film", label: "Film" },
  { value: "corporate", label: "Corporate" },
  { value: "wedding", label: "Wedding" },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="work" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple">
            Featured Projects
          </h2>
          <p className="text-gray-300">
            A selection of my best work across various formats and industries. Each project showcases
            my approach to visual storytelling and technical expertise.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeFilter === category.value ? "default" : "outline"}
              onClick={() => setActiveFilter(category.value)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-card overflow-hidden transition-all duration-300 hover:border-editor-purple/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="icon" className="rounded-full" variant="secondary">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-editor-purple text-sm capitalize">{project.category}</span>
                  <span className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" /> {project.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">Client: {project.client}</p>
                <div className="flex justify-between items-center">
                  <Button variant="link" className="px-0 text-editor-purple">
                    View Project <ExternalLink className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
