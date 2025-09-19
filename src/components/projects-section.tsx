import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

// Import project images
import sohanUiUxImage from "@/assets/projects/sohan-uiux.png"
import sohanWebImage from "@/assets/projects/sohan-web.png"
import klematrixImage from "@/assets/projects/klematrix.png"
import nammaiImage from "@/assets/projects/nammai.png"
import oneopsImage from "@/assets/projects/oneops.png"

const projects = [
  {
    title: "Matrix 2K25 Event",
    description: "Inter-college fest website with Matrix theme, featuring event details, registration, and prize information.",
    image: klematrixImage,
    tags: ["React", "Event Management", "Responsive", "Matrix Theme"],
    liveUrl: "https://klematrix2k25.in",
    githubUrl: "#",
    featured: true
  },
  {
    title: "NammAI - AI Assistant",
    description: "Multilingual AI chat assistant supporting Kannada and English with modern dark UI and real-time messaging.",
    image: nammaiImage,
    tags: ["AI", "React", "Chat Interface", "Multilingual"],
    liveUrl: "https://nammai.live",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Digital Designer Portfolio",
    description: "A sleek, dark-themed portfolio showcasing digital design work with professional aesthetics and smooth animations.",
    image: sohanUiUxImage,
    tags: ["React", "Tailwind CSS", "Dark Theme", "UI/UX"],
    liveUrl: "https://sohan-uiux.vercel.app",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Creative Web Portfolio", 
    description: "Colorful, modern portfolio with 3D elements and interactive design showcasing web development skills.",
    image: sohanWebImage,
    tags: ["Next.js", "TypeScript", "3D Graphics", "Animation"],
    liveUrl: "https://sohan-web.vercel.app",
    githubUrl: "#",
    featured: false
  },
  {
    title: "OneOps - DevOps Platform",
    description: "AI-powered DevOps automation platform with zero-config CI/CD, smart automation, and cloud integrations.",
    image: oneopsImage,
    tags: ["DevOps", "AI Automation", "CI/CD", "Cloud"],
    liveUrl: "https://oneops-18.vercel.app",
    githubUrl: "#",
    featured: false
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="hero-text-gradient">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore my latest work spanning front-end development, AI applications, 
            and DevOps practices. Each project represents a step in my journey 
            toward becoming a full-stack developer.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects Carousel */}
          <Carousel
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            className="w-full max-w-4xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {projects
                .filter(project => project.featured)
                .map((project, index) => (
                  <CarouselItem key={index}>
                    <Card className="card-hover overflow-hidden group w-full">
                      <div className="md:flex">
                        <div className="md:w-1/2 relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="flex gap-4">
                              <Button size="sm" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Live Demo
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="mr-2 h-4 w-4" />
                                  Code
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/2">
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              {project.title}
                              <Badge variant="secondary">Featured</Badge>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="tech-badge">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-white" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-white" />
          </Carousel>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center my-12 fade-in-up">
              More <span className="hero-text-gradient">Projects</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects
                .filter(project => !project.featured)
                .map((project, index) => (
                  <Card key={project.title} className="card-hover overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-2">
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="tech-badge text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="tech-badge text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/sohan20051519" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
