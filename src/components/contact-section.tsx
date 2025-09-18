import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="hero-text-gradient">Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'm always open to connecting with fellow developers, potential clients, 
            and innovative teams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss collaboration opportunities, 
                or just want to say hello, I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2">Email</h4>
                    <p className="text-muted-foreground">sohan.developer@example.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2">Location</h4>
                    <p className="text-muted-foreground">Bangalore, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2">Response Time</h4>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="text-center space-y-4">
              <h4 className="font-medium text-lg">Follow Me</h4>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" size="icon" asChild>
                  <a 
                    href="https://github.com/sohan20051519" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a 
                    href="https://www.linkedin.com/in/sohan2005" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}