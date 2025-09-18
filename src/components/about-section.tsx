import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cpu, Cloud, Database, Palette, Terminal } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-5 w-5" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"],
    color: "tech-blue"
  },
  {
    category: "AI & Tools", 
    icon: <Cpu className="h-5 w-5" />,
    items: ["AI-Driven Coding", "Vibe Coding", "Python", "Git", "GitHub Actions"],
    color: "tech-purple"
  },
  {
    category: "DevOps",
    icon: <Cloud className="h-5 w-5" />,
    items: ["Docker", "CI/CD", "Linux", "Kubernetes", "AWS Basics", "Cloud Computing"],
    color: "tech-orange"
  },
  {
    category: "Backend",
    icon: <Database className="h-5 w-5" />,
    items: ["Node.js", "APIs", "Database Management", "Server Configuration"],
    color: "tech-green"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About <span className="hero-text-gradient">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            I'm a passionate front-end developer who loves creating beautiful, functional web experiences. 
            My journey spans from traditional web development to AI-assisted coding and DevOps practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="space-y-6 fade-in-up">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started as a curious developer exploring the world of web technologies. 
                My passion for creating pixel-perfect, responsive designs led me to master 
                modern frontend frameworks and tools.
              </p>
              <p>
                Recently, I've been fascinated by AI-driven development, experimenting with 
                tools that enhance coding productivity and exploring how AI can revolutionize 
                the development process.
              </p>
              <p>
                Now expanding into DevOps to understand the full software lifecycle - from 
                development to deployment and maintenance. My goal is to become a well-rounded 
                developer who can bridge the gap between development and operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-in-up">
            <Card className="card-hover text-center p-6">
              <CardContent className="space-y-2">
                <Palette className="h-8 w-8 mx-auto text-primary" />
                <h4 className="font-semibold">UI/UX Focus</h4>
                <p className="text-sm text-muted-foreground">Pixel-perfect designs</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center p-6">
              <CardContent className="space-y-2">
                <Terminal className="h-8 w-8 mx-auto text-primary" />
                <h4 className="font-semibold">Code Quality</h4>
                <p className="text-sm text-muted-foreground">Clean, maintainable code</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center p-6">
              <CardContent className="space-y-2">
                <Cpu className="h-8 w-8 mx-auto text-primary" />
                <h4 className="font-semibold">AI Integration</h4>
                <p className="text-sm text-muted-foreground">Future-ready development</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center p-6">
              <CardContent className="space-y-2">
                <Cloud className="h-8 w-8 mx-auto text-primary" />
                <h4 className="font-semibold">DevOps Learning</h4>
                <p className="text-sm text-muted-foreground">Full-stack mindset</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-${skillGroup.color}/10`}>
                      {skillGroup.icon}
                    </div>
                    <h4 className="font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="tech-badge">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}