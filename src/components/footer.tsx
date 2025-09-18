import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold hero-text-gradient">Sohan</h3>
            <p className="text-muted-foreground">
              Front-End Developer passionate about creating beautiful web experiences 
              and exploring AI-driven development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a 
                href="#certificates" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Certificates
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Let's Connect</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <a 
                  href="https://github.com/sohan20051519" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a 
                  href="https://www.linkedin.com/in/sohan2005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a 
                  href="mailto:sohan.developer@example.com"
                  aria-label="Send Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Open to new opportunities and collaborations
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sohan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}