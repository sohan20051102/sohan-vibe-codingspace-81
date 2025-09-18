import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ChevronDown } from "lucide-react"
import sohanPortrait from "@/assets/sohan-portrait.png"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log("Download CV clicked")
  }

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-center h-full">
          {/* Content */}
          <div className="lg:col-span-3 space-y-5 lg:space-y-7 bounce-in relative z-10 text-center lg:text-left">
            <div className="space-y-3">
              <p className="text-lg text-muted-foreground">
                Hi, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="hero-text-gradient">Sohan</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/80">
                Front-End Developer | AI-Driven Coder | Aspiring DevOps Engineer
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Passionate about creating beautiful, responsive web applications and exploring 
              the intersection of AI and development. Currently expanding into DevOps practices 
              and cloud technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="glow-effect"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/sohan20051519" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center justify-center h-11 w-11 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sohan2005" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center justify-center h-11 w-11 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Hero Image - Desktop */}
          <div className="relative floating-animation lg:col-span-2 lg:order-2 hidden lg:block">
            <div className="relative z-10">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>

              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                <img
                  src={sohanPortrait}
                  alt="Sohan - Front-End Developer"
                  className="w-full max-w-sm mx-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Hero Image - Mobile */}
          <div className="relative floating-animation lg:hidden">
            <div className="relative z-10 mt-2">
              <img
                src={sohanPortrait}
                alt="Sohan - Front-End Developer"
                className="w-full max-w-[220px] sm:max-w-[280px] mx-auto object-contain max-h-[36vh] sm:max-h-[46vh] rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}